"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: Record<string, unknown>,
          containerId: string
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

type LanguageCode = "en" | "fr" | "zh";

type LanguageOption = {
  code: LanguageCode;
  label: string;
  shortLabel: string;
  googleCode: string;
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", label: "English", shortLabel: "EN", googleCode: "en" },
  { code: "fr", label: "Francais", shortLabel: "FR", googleCode: "fr" },
  { code: "zh", label: "中文", shortLabel: "ZH", googleCode: "zh-CN" },
];

const STORAGE_KEY = "optimum-language";
const SCRIPT_ID = "google-translate-script";
const CONTAINER_ID = "google_translate_element";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function getCookieLanguage(): LanguageCode | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(/(?:^|; )googtrans=\/en\/([^;]+)/);
  if (!match) return null;

  const googleCode = decodeURIComponent(match[1]);
  return LANGUAGE_OPTIONS.find((option) => option.googleCode === googleCode)?.code ?? null;
}

function setGoogleTranslateCookie(googleCode: string) {
  const value = `/en/${googleCode}`;
  const hostname = window.location.hostname;
  const cookie = `googtrans=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}`;

  document.cookie = cookie;

  if (hostname.includes(".")) {
    document.cookie = `${cookie}; domain=.${hostname}`;
  }
}

function findTranslateSelect() {
  return document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
}

async function waitForTranslateSelect(retries = 40, delay = 150) {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    const select = findTranslateSelect();
    if (select) return select;
    await new Promise((resolve) => window.setTimeout(resolve, delay));
  }

  return null;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>("en");

  const selectedLanguage = useMemo(
    () => LANGUAGE_OPTIONS.find((option) => option.code === language) ?? LANGUAGE_OPTIONS[0],
    [language]
  );

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    window.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    const storedLanguage = (window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null) ?? null;
    const initialLanguage = storedLanguage ?? getCookieLanguage() ?? "en";
    setLanguage(initialLanguage);

    window.googleTranslateElementInit = () => {
      const container = document.getElementById(CONTAINER_ID);
      if (!container || !window.google?.translate?.TranslateElement || container.childNodes.length > 0) {
        setIsReady(true);
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,zh-CN",
          autoDisplay: false,
          layout: 0,
        },
        CONTAINER_ID
      );

      setIsReady(true);
    };

    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
      return;
    }

    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const syncLanguage = async () => {
      const activeLanguage = (window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null) ?? language;
      const selectedOption = LANGUAGE_OPTIONS.find((option) => option.code === activeLanguage) ?? LANGUAGE_OPTIONS[0];

      if (activeLanguage === "en") {
        setGoogleTranslateCookie("en");
        setLanguage("en");
        return;
      }

      const select = await waitForTranslateSelect();
      if (!select) return;

      setGoogleTranslateCookie(selectedOption.googleCode);
      if (select.value !== selectedOption.googleCode) {
        select.value = selectedOption.googleCode;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }

      setLanguage(activeLanguage);
    };

    const timer = window.setTimeout(() => {
      void syncLanguage();
    }, 120);

    return () => window.clearTimeout(timer);
  }, [isReady, pathname, language]);

  const handleLanguageChange = async (nextLanguage: LanguageCode) => {
    const selectedOption = LANGUAGE_OPTIONS.find((option) => option.code === nextLanguage) ?? LANGUAGE_OPTIONS[0];
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    setLanguage(nextLanguage);
    setIsOpen(false);

    if (nextLanguage === "en") {
      setGoogleTranslateCookie("en");
      window.location.reload();
      return;
    }

    const select = await waitForTranslateSelect();
    if (!select) {
      setGoogleTranslateCookie(selectedOption.googleCode);
      window.location.reload();
      return;
    }

    setGoogleTranslateCookie(selectedOption.googleCode);
    select.value = selectedOption.googleCode;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  };

  return (
    <div ref={wrapperRef} className="notranslate relative">
      <div id={CONTAINER_ID} className="hidden" />
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Change language"
        className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-(--brand-navy) shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
        onClick={() => setIsOpen((current) => !current)}
      >
        <Globe size={16} />
        <span>{selectedLanguage.shortLabel}</span>
        <ChevronDown size={16} className={`transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[170px] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option.code}
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              onClick={() => void handleLanguageChange(option.code)}
            >
              <span>{option.label}</span>
              <span className="text-slate-400">{language === option.code ? <Check size={15} className="text-(--brand-red)" /> : option.shortLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Instagram, Facebook, Send, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/optimumlogistics",
      icon: <Send size={24} />,
      color: "bg-[#229ED9]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/optimum_logistics_/",
      icon: <Instagram size={24} />,
      color: "bg-[#E4405F]",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/optimum_logistics_/",
      icon: <Facebook size={24} />,
      color: "bg-[#1877F2]",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]" ref={menuRef}>
      {/* Social Links Menu */}
      <div
        className={`absolute bottom-16 right-0 mb-4 flex flex-col items-end gap-3 transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-0 pointer-events-none"
        }`}
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 group`}
          >
            <span className="bg-white px-3 py-1.5 rounded-lg shadow-md text-sm font-semibold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
              {link.name}
            </span>
            <div
              className={`${link.color} p-3 rounded-full text-white shadow-lg transform transition-transform hover:scale-110 active:scale-95`}
            >
              {link.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-slate-800 rotate-90" : "bg-[var(--brand-red)]"
        } p-4 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center`}
        aria-label="Contact options"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}

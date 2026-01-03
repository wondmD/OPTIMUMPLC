"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
};

type Props = {
  items: GalleryItem[];
};

export default function GallerySlider({ items }: Props) {
  const [idx, setIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const total = items.length;

  const go = (n: number) => {
    if (total === 0) return;
    setIdx((n + total) % total);
  };

  const visible = useMemo(() => {
    const prev = (idx - 1 + total) % total;
    const next = (idx + 1) % total;
    return [prev, idx, next];
  }, [idx, total]);

  if (total === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-slate-200">
      <div className="relative h-80 sm:h-96 md:h-[30rem]">
        {visible.map((i) => {
          const item = items[i];
          const position = i === idx ? "z-20 opacity-100" : "z-10 opacity-60";
          const translate = i === idx ? "translate-x-0 scale-100" : i === visible[0] ? "-translate-x-6 scale-95" : "translate-x-6 scale-95";
          return (
            <div
              key={`${item.src}-${i}`}
              className={`absolute inset-0 transition duration-500 ease-out ${position} ${translate}`}
              onClick={() => setLightboxIdx(i)}
              role="button"
              tabIndex={i === idx ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxIdx(i);
              }}
            >
              <span suppressHydrationWarning>
                <Image src={item.src} alt={item.alt} fill className="object-contain cursor-zoom-in" sizes="100vw" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <p className="absolute left-3 bottom-3 text-sm font-semibold text-white drop-shadow">{item.alt}</p>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <span key={i} className={`h-1.5 w-5 rounded-full ${i === idx ? "bg-white" : "bg-white/60"}`} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-between px-3">
        <button
          aria-label="Previous photo"
          onClick={() => go(idx - 1)}
          className="pointer-events-auto rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
        >
          {"<"} Prev
        </button>
        <button
          aria-label="Next photo"
          onClick={() => go(idx + 1)}
          className="pointer-events-auto rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
        >
          Next {">"}
        </button>
      </div>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <span suppressHydrationWarning>
              <Image
                src={items[lightboxIdx].src}
                alt={items[lightboxIdx].alt}
                fill
                className="rounded-xl object-contain shadow-2xl"
                sizes="100vw"
              />
            </span>
            <button
              aria-label="Close lightbox"
              onClick={() => setLightboxIdx(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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
      <div className="relative h-80 sm:h-96 md:h-[28rem]">
        {visible.map((i) => {
          const item = items[i];
          const position = i === idx ? "z-20 opacity-100" : "z-10 opacity-60";
          const translate = i === idx ? "translate-x-0 scale-100" : i === visible[0] ? "-translate-x-6 scale-95" : "translate-x-6 scale-95";
          return (
            <div
              key={`${item.src}-${i}`}
              className={`absolute inset-0 transition duration-500 ease-out ${position} ${translate}`}
            >
              <span suppressHydrationWarning>
                <Image src={item.src} alt={item.alt} fill className="object-contain" sizes="100vw" />
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
    </div>
  );
}

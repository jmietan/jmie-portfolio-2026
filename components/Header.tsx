"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const [navTop, setNavTop] = useState<number | null>(null);

  useEffect(() => {
    function update() {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      setNavTop(rect.bottom);
    }
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <header ref={headerRef} className="relative z-50 mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-6 pb-6 bg-neutral-100">
      <div className="flex items-center gap-3">
        <Image src="/jmietan-logo.png" alt="jmietan logo" width={120} height={40} priority />
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-white shadow-sm hover:opacity-95 active:scale-[0.98]"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 h-[2px] w-5 bg-white transition-transform duration-200 ease-in-out ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 h-[2px] w-5 bg-white transition-opacity duration-150 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 h-[2px] w-5 bg-white transition-transform duration-200 ease-in-out ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
              }`}
            />
          </span>
        </button>

        <nav
          style={{ top: navTop ? `${navTop}px` : undefined }}
          className={`fixed left-0 w-full bg-neutral-100 z-40 transform transition-transform duration-150 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          <div className="mx-auto max-w-5xl px-5">
            <ul className="flex flex-col items-center p-8">
              <li>
                  <Link onClick={() => setOpen(false)} className="block w-full text-center px-3 py-6 text-[32px] font-medium text-gray-800 hover:bg-neutral-200" href="/">
                    Home
                  </Link>
              </li>
              <li>
                  <Link onClick={() => setOpen(false)} className="block w-full text-center px-3 py-6 text-[32px] font-medium text-gray-800 hover:bg-neutral-200" href="/projects">
                    Projects
                  </Link>
              </li>
              <li>
                  <Link onClick={() => setOpen(false)} className="block w-full text-center px-3 py-6 text-[32px] font-medium text-gray-800 hover:bg-neutral-200" href="/contact">
                    Contact
                  </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

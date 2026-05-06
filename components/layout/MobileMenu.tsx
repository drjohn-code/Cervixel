"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NavLink = { readonly href: string; readonly label: string };

export default function MobileMenu({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open && menuRef.current) {
      const first = menuRef.current.querySelector<HTMLElement>("a, button");
      first?.focus();
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded text-text hover:text-primary transition-colors"
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav"
          ref={menuRef}
          className="absolute inset-x-0 top-16 z-40 border-t border-border bg-bg shadow-lg"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col py-2 list-none">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-base font-medium text-text hover:bg-surface hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-3">
                <Link
                  href="/products/cervixscan"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded bg-accent px-4 py-3 text-center text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
                >
                  Preorder Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

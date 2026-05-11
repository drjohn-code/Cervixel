"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

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
        className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md text-ink"
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
          className="absolute inset-x-0 top-[72px] z-40 border-t border-border bg-bg shadow-md"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col py-3 list-none">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-h5 font-medium text-ink hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-4">
                <Button
                  href="/products/rapidcan/preorder"
                  variant="primary"
                  size="md"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  Preorder
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

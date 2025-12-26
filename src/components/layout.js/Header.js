"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Button from "../ui/Button";
import styles from "./Header.module.scss";
import { mainNav } from "@/data/Navigation";

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);

  /* Escape key close */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  /* Focus trap */
  useEffect(() => {
    if (!open || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const trap = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-bapp.png"
              alt="PT Bumi Asri Pratama"
              width={130}
              height={61.6}
            />
          </Link>
          <nav className={styles.navDesktop}>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href ? styles.active : styles.navLink
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.cta}>
            <Button size="sm" variant="primary" as={Link} href="/contact">
              Company Profile
            </Button>
          </div>
          <button
            ref={hamburgerRef}
            className={`${styles.hamburger} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles.mobileMenu} ${open ? styles.show : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <nav className={styles.navMobile}>
          <button
            className={`${styles.hamburger} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={styles.mobileLink}
            >
              {item.label}
            </Link>
          ))}
          <Button size="md">Hubungi Kami</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

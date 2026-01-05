import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topChild}>
              <Image
                src="/images/logo-bapp-white.png"
                alt="Logo"
                width={125}
                height={60}
              />
              <h2>PT Bumi Asri Prima Pratama</h2>
            </div>
            <div className={styles.topChild}>
              <h3>Head Office</h3>
              <p>
                Gedung Granadi, Lt.10 Jl.H.R. Rasuna Said Blok X-1 Kav.8-9
                Jakarta Selatan 12950, Indonesia Tel. +62-21 2941 0743
              </p>
            </div>
            <div className={styles.topChild}>
              <h3>Representative Office</h3>
              <p>
                Hanurata Graha, Lt.7 Jl. Kebon Sirih Raya Kav.67-69 Jakarta
                Pusat 10340, Indonesia Tel. +62-21 3923 664, +62-21 3923 678
              </p>
            </div>
            <div className={`${styles.topChild} ${styles.center}`}>
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>
              © {new Date().getFullYear()} PT Bumi Asri Prima Pratama. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

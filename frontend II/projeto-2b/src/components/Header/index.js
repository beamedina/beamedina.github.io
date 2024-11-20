"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Music</h1>
      </div>
      <button
        className={styles.menuButton + (menuOpen ? " " + styles.open : "")}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <nav className={styles.nav + (menuOpen ? " " + styles.navOpen : "")}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/paris">
              A Paris
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/sobre">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
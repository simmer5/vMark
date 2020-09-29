import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </Link>
    </footer>
  );
};
export default Footer;

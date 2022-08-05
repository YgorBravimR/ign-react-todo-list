import styles from "./Header.module.css";

import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="" />
      <span>to</span>
      <span className={styles.do}>do</span>
      <a
        href="https://www.linkedin.com/in/ygorbravimr/"
        className={styles.bravo}
        target="_blank"
      >
        .bravo
      </a>
    </header>
  );
}

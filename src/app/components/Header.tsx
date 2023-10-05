import Image from "next/image";
import styles from "./header.module.scss";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={35}
          className={styles.logo}
        />
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimaryMain}>gaurav solanki</span>
          <span className={styles.headingPrimarySub}>
            Turning Ideas into Interactive Experiences
          </span>
        </h1>
      </div>
    </header>
  );
}

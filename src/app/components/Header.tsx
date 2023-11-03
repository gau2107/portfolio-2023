import Image from "next/image";
import styles from "./header.module.scss";
import Logo from "../assets/logo-light.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={100}
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

        <a href="#" className={`btn btn-white`}>
          Hire Me
        </a>
      </div>
    </header>
  );
}

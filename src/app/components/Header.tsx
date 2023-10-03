import Image from "next/image";
import styles from "./header.module.scss";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image src={Logo} alt="Logo" width={300} height={200}/>
      </div>
    </header>
  );
}

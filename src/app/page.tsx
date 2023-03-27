import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Gaurav Solanki</h1>
    </main>
  );
}

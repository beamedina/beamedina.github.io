import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>My Fedida</h1>
      <Image className={styles.img} src='/images/bonjovi.jpg' alt='Imagem do álbum do Bon Jovi' width={400} height={400} />
    </div>
  );
}
//  lloko


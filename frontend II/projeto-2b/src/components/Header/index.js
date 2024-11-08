import Link from "next/link"
import styles from "./Header.module.css"


export default function Header () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} >
                <ul className={styles.ul}>
                    <li className={styles.li}>
                       <Link className ={styles.linkzin} href='/'>Home</Link> 
                    </li>
                    <li className={styles.li}>
                        <Link className ={styles.linkzin} href='/paris'>A Paris</Link>
                    </li>
                    <li className={styles.li}>
                        <Link className ={styles.linkzin} href='/sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


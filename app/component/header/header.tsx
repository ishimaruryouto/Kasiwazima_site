import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="#">ロゴ</Link>
                    <ul>
                        <li><Link href="#">柏島について</Link></li>
                        <li><Link href="#">アクセス</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
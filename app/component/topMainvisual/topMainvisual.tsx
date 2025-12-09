import styles from "../topMainvisual/topMainvisual.module.scss";
export default function TopMainvisual() {
    return (
        <>
            <div className={styles.mainvisual}>
                <div className={styles.head}>
                    <h1 className={styles.h1}>
                        Welcome to<br />
                        Kashiwajima
                    </h1>
                </div>
            </div>
        </>
    );
}
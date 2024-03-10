import styles from "./styles.module.scss"

export function Footer() {
  return <footer className={styles.footer}>
    <p className={styles.lang}>English</p>
    <p>Privacy Policy</p>
    <p>License</p>
    <p>API</p>
  </footer>
}
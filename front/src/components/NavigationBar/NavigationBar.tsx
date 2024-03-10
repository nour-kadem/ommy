import { Button } from "@/components/Button/Button"
import styles from "./styles.module.scss"

export function NavigationBar() {
  return <nav className={styles.nav}>
    <p className={styles.dashboard}>Dashboard</p>
    <img src="/src/assets/icons/notifications.svg" alt="" />
    <Button icon="apps" colored={false}>Apps</Button>
    <Button icon="plus" colored={true}>Start Publish</Button>
  </nav>
}
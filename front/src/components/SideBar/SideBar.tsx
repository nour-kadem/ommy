import { PropsWithChildren } from "react"
import styles from "./styles.module.scss"

export function SideBar() {
  return <aside className={styles.sidebar}>
    <img className={styles.logo} src="/src/assets/ommy_logo.svg" alt="" />
    <nav className={styles.menu}>
      <p>Overview</p>
      <MenuItem active={true}>Dashboard</MenuItem>
      <MenuItem active={false}>Publish Content</MenuItem>
      <MenuItem active={false}>Armies</MenuItem>
      <MenuItem active={false}>Content Calendar</MenuItem>
    </nav>
    <Profile></Profile>
  </aside>
}

type Props = PropsWithChildren<{
  active: boolean
}>

function MenuItem({ children, active = false }: Props) {

  return <p className={`${styles.menuItem} ${active ? styles.active : ''}`}>
    {/* Mettre l'icone en SVG */}
    {children}
  </p>
}

function Profile() {
  return <div className={styles.profile}>
    <img src="/src/assets/img/persona.jpg" alt="" />
    <p>Herny truc</p>
    <img className={styles.dots} src="/src/assets/icons/three_dots.svg" alt="" />
  </div>
}
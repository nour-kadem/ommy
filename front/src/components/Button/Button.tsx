import { PropsWithChildren } from "react"
import styles from "./styles.module.scss"

type Props = PropsWithChildren<{
  icon: string
  colored: boolean
}>

export function Button({ children, icon, colored = true }: Props) {

  return <button className={ `${styles.button} ${colored ? styles.colored : ""}` }>
    <img src={`/src/assets/icons/${icon}.svg`} alt="" />
    { children }
  </button>
}
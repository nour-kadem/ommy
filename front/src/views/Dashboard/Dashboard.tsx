import { SideBar } from "@/components/SideBar/SideBar"
import { NavigationBar } from "@/components/NavigationBar/NavigationBar"
import styles from "./styles.module.scss"
import { GrowthIndex } from "@/components/GrowthIndex/GrowthIndex"
import { Footer } from "@/components/Footer/Footer"
import { GraphPanel } from "@/components/GraphPanel/GraphPanel"

export function Dashboard() {
  return <div className={styles.dashboard}>
    <SideBar></SideBar>
    <main className={styles.main}>
      <NavigationBar></NavigationBar>
      <Stats></Stats>
      <Footer></Footer>
    </main>
  </div>
}

export function Stats() {
  return <section className={styles.view}>
    <div className={styles.heading}>
      <h1>Welcome, Henry</h1>
      <p>Start your online propaganda</p>
    </div>

    <div className={styles.growthIndexes}>
      <GrowthIndex mediaName="Général"></GrowthIndex>
      <GrowthIndex mediaName="Tiktok"></GrowthIndex>
      <GrowthIndex mediaName="Instagram"></GrowthIndex>
    </div>

    <div className={styles.panels}>
      <GraphPanel></GraphPanel>
      <GraphPanel></GraphPanel>
    </div>
  </section>
}
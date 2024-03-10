import { Legend, plugins, scales } from "chart.js"
import styles from "./styles.module.scss"
import { Line } from "react-chartjs-2"



type Props = {
  mediaName: string
}

export function GrowthIndex({ mediaName }: Props) {

  return <div className={styles.growthIndex}>
    <h2 className={styles.medianame}>{mediaName}</h2>
    <div className={styles.data}>
      <div className={styles.values}>
        <p className={styles.views}>300K Views</p>
        <p>
          <span>+0.75%</span>
          <img src="/src/assets/icons/stonks.svg" alt="" />
        </p>
      </div>
      <div className={styles.container}>
        <Line
          data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                label: '',
                data: [5, 6, 7],
                fill: false
              },
            ],
          }}

          options={{
          }}
        ></Line>
      </div>

    </div>
  </div>
}
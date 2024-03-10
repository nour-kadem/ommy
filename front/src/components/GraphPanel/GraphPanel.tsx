import styles from "./styles.module.scss"
import { Line } from "react-chartjs-2"


export function GraphPanel() {
  return <div className={styles.panel}>
    <div className={styles.heading}>
      <h2 className={styles.title}>View Performance</h2>
      <span className={styles.type}>

      </span>
    </div>
    <Line
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: '',
            data: [0, 600, 400, 500, 500, 400, 600],
          },
        ],
      }}></Line>
  </div>
}
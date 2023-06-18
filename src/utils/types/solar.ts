export interface SolarInfoProps {
  data_type: string
  x_labels: string[]
  generation: number[]
  expected: number[]
  totals: {
    kwh: number
    percentage: number
    trees: number
    co2: number
  }
}

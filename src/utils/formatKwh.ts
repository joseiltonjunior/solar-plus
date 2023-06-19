export function formatKWh(kwhValue: number): string {
  if (kwhValue < 1000) {
    return `${kwhValue.toFixed(2)} kWh`
  } else if (kwhValue < 1000000) {
    const valorFormatado = (kwhValue / 1000).toFixed(2)
    return `${valorFormatado} MWh`
  } else {
    const valorFormatado = (kwhValue / 1000000).toFixed(2)
    return `${valorFormatado} GWh`
  }
}

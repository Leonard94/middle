export const getReadingTime = (text: string): string => {
  const wordReadingPerSecond = 4
  const min = text.split(' ').length / wordReadingPerSecond / 60

  if (min < 1) {
    return 'меньше минуты'
  }

  return `${String(Math.round(min))} мин.`
}

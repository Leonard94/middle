import moment from 'moment'
import 'moment/locale/ru'

export const getFormattedDate = (date: string): string => {
  return moment(date).format('ll')
}

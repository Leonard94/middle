import { getFormattedDate } from './getFormattedDate'

test('Should be return day and month', () => {
  expect(getFormattedDate('2022-10-09T10:14:34.005Z')).toBe('9 окт. 2022 г.')
  expect(getFormattedDate('2020-01-01T10:14:34.005Z')).toBe('1 янв. 2020 г.')
  expect(getFormattedDate('2020-01-01')).toBe('1 янв. 2020 г.')
  expect(getFormattedDate('2023-03-20')).toBe('20 мар. 2023 г.')
  expect(getFormattedDate('')).toBe('Invalid date')
})

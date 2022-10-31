import { getReadingTime } from './getReadingTime'

const getArr = (wordsCount: number) => {
  const arr = []
  for (let i = 0; i <= wordsCount; i++) {
    arr.push(i)
  }
  return arr.join(' ')
}

test('Should be return reading time', () => {
  expect(getReadingTime(getArr(5))).toBe('меньше минуты')
  expect(getReadingTime(getArr(10))).toBe('меньше минуты')
  expect(getReadingTime(getArr(100))).toBe('меньше минуты')
  expect(getReadingTime(getArr(1000))).toBe('4 мин.')
  expect(getReadingTime(getArr(10000))).toBe('42 мин.')
  expect(getReadingTime('1 1 1 1')).toBe('меньше минуты')
  expect(getReadingTime('w o r d s ')).toBe('меньше минуты')
  expect(getReadingTime('')).toBe('меньше минуты')
})

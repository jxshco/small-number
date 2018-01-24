import smallNumber from '../src'
test('Less than 1000 Returns Initial Number', () => {
  expect(smallNumber(123)).toBe("123")
})

test('Less than 1000', () => {
  expect(smallNumber(123)).toBe("123")
})

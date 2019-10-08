import smallNumber from '../src'
test('Less than 1000 Returns Initial Number', () => {
  expect(smallNumber(123)).toBe('123')
})

describe('Thousands', () => {
  test('1000 => 1.0k', () => {
    expect(smallNumber(1000)).toBe('1.0k')
    expect(smallNumber(1000, 0)).toBe('1k')
    expect(smallNumber(1000, 2)).toBe('1.00k')
  })
  test('43403 => 43.4k', () => {
    expect(smallNumber(43403)).toBe('43.4k')
    expect(smallNumber(43403, 0)).toBe('43k')
    expect(smallNumber(43403, 2)).toBe('43.40k')
  })
  test('923802 => 924.8k', () => {
    expect(smallNumber(923802)).toBe('923.8k')
    expect(smallNumber(923802, 0)).toBe('924k')
    expect(smallNumber(923802, 2)).toBe('923.80k')
  })
})

describe('Millions', () => {
  test('1000000 => 1.0m', () => {
    expect(smallNumber(1000000)).toBe('1.0m')
    expect(smallNumber(1000000, 0)).toBe('1m')
    expect(smallNumber(1000000, 2)).toBe('1.00m')
  })
  test('43403283 => 43.4m', () => {
    expect(smallNumber(43403283)).toBe('43.4m')
    expect(smallNumber(43403283, 0)).toBe('43m')
    expect(smallNumber(43403283, 2)).toBe('43.40m')
  })
  test('9238020427 => 923.8m', () => {
    expect(smallNumber(923802047)).toBe('923.8m')
    expect(smallNumber(923802047, 0)).toBe('924m')
    expect(smallNumber(923802047, 2)).toBe('923.80m')
  })
})

describe('Billions', () => {
  test('1000000000 => 1.0b', () => {
    expect(smallNumber(1000000000)).toBe('1.0b')
    expect(smallNumber(1000000000, 0)).toBe('1b')
    expect(smallNumber(1000000000, 2)).toBe('1.00b')
  })
  test('43403283 => 43.4m', () => {
    expect(smallNumber(43403283123)).toBe('43.4b')
    expect(smallNumber(43403283123, 0)).toBe('43b')
    expect(smallNumber(43403283123, 2)).toBe('43.40b')
  })
  test('9238020427 => 923.8m', () => {
    expect(smallNumber(923802047123)).toBe('923.8b')
    expect(smallNumber(923802047123, 0)).toBe('924b')
    expect(smallNumber(923802047123, 2)).toBe('923.80b')
  })
})

describe('Trillions', () => {
  test('1000000000000 => 1.0t', () => {
    expect(smallNumber(1000000000000)).toBe('1.0t')
    expect(smallNumber(1000000000000, 0)).toBe('1t')
    expect(smallNumber(1000000000000, 2)).toBe('1.00t')
  })
  test('43403283123812 => 43.4t', () => {
    expect(smallNumber(43403283123812)).toBe('43.4t')
    expect(smallNumber(43403283123812, 0)).toBe('43t')
    expect(smallNumber(43403283123812, 2)).toBe('43.40t')
  })
  test('923802047123812 => 923.8t', () => {
    expect(smallNumber(923802047123812)).toBe('923.8t')
    expect(smallNumber(923802047123812, 0)).toBe('924t')
    expect(smallNumber(923802047123812, 2)).toBe('923.80t')
  })
})

describe('Quadrillions', () => {
  test('1000000000000000 => 1.0qd', () => {
    expect(smallNumber(1000000000000000)).toBe('1.0qd')
    expect(smallNumber(1000000000000000, 0)).toBe('1qd')
    expect(smallNumber(1000000000000000, 2)).toBe('1.00qd')
  })
  test('9007199254740991 => 9.0qd', () => {
    expect(smallNumber(9007199254740991)).toBe('9.0qd')
    expect(smallNumber(9007199254740991, 0)).toBe('9qd')
    expect(smallNumber(9007199254740991, 2)).toBe('9.01qd')
  })
})

describe('Errors', () => {
  test('Larger Numbers Throw', () => {
    expect(() => { smallNumber(9007199254740992) }).toThrow()
    expect(() => { smallNumber(123123123123123123) }).toThrow()
    expect(() => { smallNumber(123123123123123123123) }).toThrow()
  })
  test('Invalid Types Throw', () => {
    expect(() => { smallNumber('Hello World') }).toThrow()
    expect(() => { smallNumber(['Hello', 'World']) }).toThrow()
    expect(() => { smallNumber({ hello: 'world' }) }).toThrow()
    expect(() => { smallNumber(null) }).toThrow()
    expect(() => { smallNumber() }).toThrow()
    expect(() => { smallNumber(undefined) }).toThrow()
  })
})

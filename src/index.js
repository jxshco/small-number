export default (number, dec = 1, min = 1000) => {
  if (number === undefined || number === null) throw new Error(`Error: ${number} is not a number`)
  if (isNaN(number)) throw new Error(`Error: ${number} is not a number`)
  if (number > Number.MAX_SAFE_INTEGER) throw new Error('Error: Number is too big')
  if (number < min) return String(number)
  const str = String(number)
  const length = str.length
  const formatted = Number(str.substr(0, length % 3 !== 0 ? length % 3 : 3) + '.' + str.substr(length % 3 !== 0 ? length % 3 : 3)).toFixed(dec)
  return formatted + (length > 15 ? 'qd' : length > 12 ? 't' : length > 9 ? 'b' : length > 6 ? 'm' : length > 3 ? 'k' : '')
}

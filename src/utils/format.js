import numbro from 'numbro'

export const formatCurrency = (num) => {
  numbro.setLanguage('en-US')
  let cur
  if (+num > 99999) {
    cur = numbro(num).formatCurrency({
      thousandSeparated: true,
      optionalMantissa: true,
      mantissa: 0,
      average: true,
    })
  } else {
    cur = numbro(num).formatCurrency({
      thousandSeparated: true,
      optionalMantissa: true,
      mantissa: 2,
      average: false,
    })
  }
  return cur.toUpperCase().replace('$', '\u09F3 ')
}

export const formatChar = (str, limit = 10) => {
  if (!str) {
    return ''
  }
  if (str.length <= limit) {
    return str
  }
  const strArr = str.split(' ')
  const newStr = []
  strArr.reduce((acc, cur) => {
    if (acc + cur.length <= limit) {
      newStr.push(cur)
    }
    return acc + cur.length
  }, 0)
  return newStr.join(' ') + '...'
}

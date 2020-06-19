function double (num) {
  if (typeof num === 'number') {
    return num * 2
  } else {
    return 'I need number~'
  }
}

module.exports = { double }
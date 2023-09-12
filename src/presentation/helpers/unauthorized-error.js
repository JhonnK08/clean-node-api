class UnauthorizedError extends Error {
  constructor (paramName) {
    super('Unauthorized')
    this.name = ''
  }
}

module.exports = UnauthorizedError

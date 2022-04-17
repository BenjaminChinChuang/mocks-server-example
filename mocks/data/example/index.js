const defaultResMiddleware = require('@utils/defaultResMiddleware')

const API_DATA = {
  success: {
    data: 'example data for mocks server testing',
  },
  error: '',
}

const response = (req, res) => {
  const data = API_DATA
  defaultResMiddleware(req, res, data)
}

module.exports = response

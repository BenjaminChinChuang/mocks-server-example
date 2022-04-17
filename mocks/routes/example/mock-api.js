require('module-alias/register')
const response = require('@data/example/index')

const serviceList = [
  {
    id: 'get-example', // route ID
    url: '/api/example', // same as back-end api
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // varient ID
        response,
      },
    ],
  },
]

module.exports = serviceList

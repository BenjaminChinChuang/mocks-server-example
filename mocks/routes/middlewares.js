// Use this file only as a guide for first steps using middlewares. Delete it when no more needed.
// For a detailed explanation about using middlewares, visit:
// https://mocks-server.org/docs/guides-using-middlewares

module.exports = [
  {
    id: 'middlewares',
    url: '*',
    method: ['PUT', 'DELETE', 'GET', 'POST', 'OPTIONS'],
    variants: [
      {
        id: 'avoid-cors',
        response: (req, res, next, mocksServer) => {
          mocksServer.tracer.warn(
            `req-header-origin : ${JSON.stringify(req.headers.origin)}`
          )

          const requestHeaderOrigin = req.headers.origin
          const isLocalHost =
            requestHeaderOrigin &&
            (requestHeaderOrigin.includes('localhost') ||
              requestHeaderOrigin.includes('127.0.0.1'))
          const regExp = /(?:ruten|pchomeus)\.com(?:\.tw)?$/g
          const isMatches = regExp.exec(requestHeaderOrigin) || isLocalHost

          if (requestHeaderOrigin && isMatches) {
            res.set({
              'Access-Control-Allow-Origin': requestHeaderOrigin,
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Methods': '*',
              'ruten-mocks-server': 'DATA_FOR_DEV',
            })
          }

          next()
        },
      },
    ],
  },
]

module.exports = {
  // low level config
  babelRegister: true,
  babelRegisterOptions: {
    // For a detailed explanation regarding each Babel register option, visit: https://babeljs.io/docs/en/babel-register
    extensions: ['.js'],
  },
  // addPlugins: [],
  // options
  options: {
    // mock to use on start
    mock: 'mock-service',
    // files watch enabled
    watch: true,
    // Interactive CLI enabled
    cli: true,
    // Server port
    port: 80,
    // Cors middleware
    cors: true,
    // Cors pre-flight
    corsPreFlight: true,

    // mocks and routes path
    // path: "mocks",

    // server delay
    // delay: 0,

    // log level. One of "error", "warn", "info", "verbose", "debug", "silly"
    // log: "info",

    // Administration REST API path
    // adminApiPath: "/admin",

    // Server host
    // host: "0.0.0.0",

    // Legacy path containing mocks in v1 format
    // pathLegacy: "mocks-legacy",

    // Legacy option for setting v1 behavior
    // behavior: "base",

    // files watch enabled in legacy path
    // watchLegacy: true,
  },
}

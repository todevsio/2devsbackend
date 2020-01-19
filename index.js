const dotenv = require('dotenv')
dotenv.config({ path: process.env.NODE_ENV === 'PROD' ? 'prod.env' : 'dev.env' })

const HttpServer = require('./src/driver/server/http-server')
const server = new HttpServer()
server.start()
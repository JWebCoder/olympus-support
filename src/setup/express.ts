import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import morgan from 'morgan'
import cors from 'cors'
import logger from './logger.js'
import { generateRouter } from '../routes/index.js'
import type { Express } from 'express'
import { normalizePort } from '../utils/normalizePort.js'

const log = logger('setup/express')

export function generateExpress (): Express {
  log('start')
  const { SESSION_SECRET = 'keyboard cat' } = process.env

  const application = express()
  application.set('port', normalizePort())
  application.set('trust proxy', 1)
  
  application.use([
    morgan('dev') as express.Handler,
    cors({
      origin: process.env.CORS_WHITELIST || '*',
      credentials: true,
    }),
    cookieSession({
      secret: SESSION_SECRET,
    }),
    bodyParser.json(),
    generateRouter()
  ])

  log('end')
  return application
}

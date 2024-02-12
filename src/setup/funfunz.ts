import path from 'path'
import { Funfunz } from '@funfunz/core/lib/index.js'
import logger from './logger.js'
import models from '../models/index.js'
import { fileURLToPath } from 'url'
import {Connector as JSONConnector} from '@funfunz/json-data-connector'
const log = logger('setup/funfunz')
log('start')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function generateFunfunz() {
  log('building funfunz')

  const connectors = {
    mainJSONDatabase: {
      connector: JSONConnector,
      config: {
        folderPath: path.join(__dirname, '..', '..', 'storage'),
      },
    }
  }

  const funfunz = new Funfunz({
    config: {
      graphiql: process.env.NODE_ENV !== 'production',
      // @ts-ignore
      connectors,
    },
    // @ts-ignore
    entities: models,
  })
  log('built funfunz')

  return funfunz
}
log('end')
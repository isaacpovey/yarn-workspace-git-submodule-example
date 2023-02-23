import { pino, Logger } from 'pino'

let logger: Logger

export const configureLogging = () => {
    if (!logger) {
        logger = process.env.NODE_ENV == 'production' ? pino({
            formatters: {
                level: label => ({ level: label })
            }
        }) : pino(pino.transport({ target: 'pino-pretty' }))
    }
}
export const getLogger = () => {
    if (logger) {
        return logger
    } else if (process.env['NODE_ENV'] == 'test') {
        if (!logger) {
            logger = pino(pino.transport({ target: 'pino-pretty', options: { level: 'debug' } }))
        }
        return logger
    } else {
        throw Error('Logger not configured. Please run configureLogging before starting app.')
    }
}

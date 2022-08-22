// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const funcionMala = require('./archivo')




function error() {
    console.error('Este es un error y un mensaje personalizado')
}
error()


// - Registra el error en un archivo a través de un try...catch

try {
    funcionMala(2932)
    console.log('El error está funcionando correctamente')
} catch (err) {
    console.error('Incluso el error está fallando! ' + err)
}
import { createLogger, format, transports } from 'winston';

const logFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    format.printf((info) => `[${info.timestamp} ${info.level}] ${info.message}`)
);

const logger = createLogger({
    transports: [
        new transports.File({
            format: logFormat,
            filename: './.logs/log.log',
            maxsize: 5242880,
            maxFiles: 5,
        }),
        new transports.Console({
            format: format.combine(format.colorize(), logFormat),
        }),
    ],
});

export default logger;

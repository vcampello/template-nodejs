import winston from 'winston';

const formatOptions: winston.Logform.Format[] =
    process.env.NODE_ENV?.toLowerCase() === 'dev'
        ? [winston.format.colorize(), winston.format.simple()]
        : [winston.format.json(), winston.format.timestamp()];

export const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(...formatOptions),
});

export function formatJson(value: unknown): string {
    return JSON.stringify(value, null, 2);
}

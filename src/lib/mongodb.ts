import { connect, connection } from 'mongoose';
import { DB_URI } from '../config';
import logger from '../utils/logger';

export const initDBConnection = async (): Promise<void> => {
    logger.info('connecting to mongodb...');

    try {
        await connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info('database connection successful');
    } catch (e) {
        logger.error(e);
        //crash the process if database is not connected
        process.exit(1001);
    }
};

export const closeConnection = async () => {
    await connection.close(true);
};
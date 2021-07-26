import app from './app';
import { PORT } from './config';
import logger from './utils/logger';
import { initDBConnection } from './lib/mongodb';
import './utils/exitHandler';

const startServer = async () => {
    //connect to database
    await initDBConnection();

    //start listening
    app.listen(PORT, async () => {
        logger.info(`app started on port ${PORT}`);
    });
};

startServer();

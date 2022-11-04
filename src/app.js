require('dotenv/config');
require('express-async-errors');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const { json } = require('express');
app.use(json());

const { UPLOADS_FOLDER } = require('./configs/uploads');
app.use('/files', express.static(UPLOADS_FOLDER));

const appRoutes = require('./routes');
app.use(appRoutes);

const AppError = require('./utils/AppError');
app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});



module.exports = app;

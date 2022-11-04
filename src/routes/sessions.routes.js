const SessionsController = require('../controllers/SessionsController');
const sessionsController = new SessionsController();

const { Router } = require('express');
const sessionsRouter = Router();

sessionsRouter.post('/', sessionsController.create);

module.exports = sessionsRouter;
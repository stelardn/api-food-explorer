const UsersController = require('../controllers/UsersController');
const usersController = new UsersController();

const { Router } = require('express');
const usersRouter = Router();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

usersRouter.post('/', usersController.create);
usersRouter.get('/', ensureAuthenticated, usersController.show);

module.exports = usersRouter;
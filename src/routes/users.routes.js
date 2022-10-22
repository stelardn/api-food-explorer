const UsersController = require('../controllers/UsersController');
const usersController = new UsersController();

const { Router } = require('express');
const usersRouter = Router();

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.show);

module.exports = usersRouter;
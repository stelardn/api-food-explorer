const { Router } = require('express');
const ordersRoutes = Router();

const OrdersController = require('../controllers/OrdersController');
const ordersController = new OrdersController();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.post('/', ordersController.create);
ordersRoutes.get('/', ordersController.index);
ordersRoutes.get('/:id', ordersController.show);
ordersRoutes.put('/:id', ordersController.update);
ordersRoutes.patch('/:id', ordersController.updateStatus);

module.exports = ordersRoutes;
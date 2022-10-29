const { Router } = require('express');
const ordersRoutes = Router();

const OrdersController = require('../controllers/OrdersController');
const ordersController = new OrdersController();

ordersRoutes.post('/', ordersController.create);
ordersRoutes.get('/', ordersController.index);
// ordersRoutes.get('/:id', ordersController.show);
ordersRoutes.put('/:id', ordersController.update);

module.exports = ordersRoutes;
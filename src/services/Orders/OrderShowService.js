const AppError = require("../../utils/AppError");

class OrderShowService {
    constructor(orderRepository, orderItemsRepository) {
        this.orderRepository = orderRepository;
        this.orderItemsRepository = orderItemsRepository;
    }

    async getOrder(order_id) {
        const orderItems = await this.orderItemsRepository.findOrderItemsWithPriceByOrderId(order_id);

        if (orderItems.length > 0) {
            const price = orderItems.reduce((totalPrice, item) => {
                return totalPrice + item.price * item.quantity
            }, 0);


            const order = {
                items: [...orderItems],
                price
            }

            return order;
        }

        throw new AppError('Não foi possível buscar os dados.');


    }
}
module.exports = OrderShowService;
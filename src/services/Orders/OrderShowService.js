const AppError = require("../../utils/AppError");

class OrderShowService {
    constructor(orderRepository, orderItemsRepository) {
        this.orderRepository = orderRepository;
        this.orderItemsRepository = orderItemsRepository;
    }

    async getOrder(order_id) {
        const orderItems = await this.orderItemsRepository.findOrderItemsWithPriceByOrderId(order_id);

        const orderInfo = await this.orderRepository.findById(order_id);

        let order = {
            items: [],
            ...orderInfo,
            price: 0
        }

        if (orderItems.length > 0) {
            const price = orderItems.reduce((totalPrice, item) => {
                return totalPrice + item.price * item.quantity
            }, 0);

            order = {
                items: [...orderItems],
                price,
                ...orderInfo
            }
        }
        return order;

        // throw new AppError('Não foi possível buscar os dados.');
    }
}
module.exports = OrderShowService;
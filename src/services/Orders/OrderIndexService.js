const AppError = require("../../utils/AppError");

class OrderIndexService {
    constructor(orderRepository, orderItemsRepository) {
        this.orderRepository = orderRepository;
        this.orderItemsRepository = orderItemsRepository;
    }

    async getAll() {
        const allOrders = await this.orderItemsRepository.findAllOrders();


        if (allOrders.length > 0) {

            const allItems = await this.orderItemsRepository.findOrderItemsAndOrderInfo();

            const allOrdersWithItems = allOrders.map(order => {
                const orderItems = allItems.filter(item => item.id == order.id); // item id é o order id do item

                return {
                    ...order,
                    orderItems
                }
            })

            return allOrdersWithItems;
        }

        throw new AppError('Não foi possível buscar os dados.');


    }
}
module.exports = OrderIndexService;
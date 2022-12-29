const AppError = require('../../utils/AppError');

class OrderIndexService {
    constructor(orderRepository, orderItemsRepository) {
        this.orderRepository = orderRepository;
        this.orderItemsRepository = orderItemsRepository;
    }

    async getAll() {
        const allOrders = await this.orderRepository.findAllOrders();

        if (allOrders.length > 0) {

            const allItems = await this.orderItemsRepository.findOrderItemsAndOrderInfo();

            const allOrdersWithItems = allOrders.map(order => {
                const orderItems = allItems.filter(item => item.id == order.id); // item id é o order id do item

                return {
                    ...order,
                    items: orderItems
                }
            });


            return allOrdersWithItems;
        }

        return;


    }

    async getUserOrders(user_id) {
        const userOrders = await this.orderRepository.findUserOrders(user_id);


        if (userOrders.length > 0) {

            const allItems = await this.orderItemsRepository.findUserOrderItemsAndOrderInfo(user_id);

            const userOrdersWithItems = userOrders.map(order => {
                const orderItems = allItems.filter(item => item.id == order.id); // item id é o order id do item

                return {
                    ...order,
                    orderItems
                }
            })

            return userOrdersWithItems;
        }

        return;
    }


}
module.exports = OrderIndexService;
const AppError = require("../../utils/AppError");

class OrderIndexService {
    constructor(orderRepository, orderItemsRepository) {
        this.orderRepository = orderRepository;
        this.orderItemsRepository = orderItemsRepository;
    }

    async getAll() {
        const allItems = await this.orderItemsRepository.findOrderItemsAndOrderInfo();

        if (allItems.length > 0) {
            return allItems;
        }

        throw new AppError('Não foi possível buscar os dados.');
    }
}
module.exports = OrderIndexService;
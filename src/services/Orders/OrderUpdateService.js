const AppError = require('../../utils/AppError');

class OrderUpdateService {
    constructor(orderRepository, orderItemsRepository) {
        this.orderRepository = orderRepository;
        this.orderItemsRepository = orderItemsRepository;
    }

    async execute({ id, meal_id, quantity }) {
        const order = await this.orderRepository.findById(id);

        if (!order) {
            throw new AppError('Pedido não encontrado.')
        }

        let orderUpdate = {
            order_id: Number(id),
            meal_id,
            quantity
        }

        if (quantity === 0) {
            await this.orderItemsRepository.removeItem(meal_id, id);
        } else {
            const itemIsInOrder = await this.orderItemsRepository.findItemInOrderByMealId(orderUpdate);

            if (itemIsInOrder) {
                await this.orderItemsRepository.updateExistingItemQuantity(orderUpdate);

            } else {
                await this.orderItemsRepository.addItem(orderUpdate);
            }
        }

        const allItemsInOrder = await this.orderItemsRepository.findOrderItemsWithPriceByOrderId(id);

        if (!allItemsInOrder[0]) {
            throw new AppError('Erro ao atualizar o pedido.');
        }

        const priceUpdated = allItemsInOrder.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0);

        orderUpdate = {
            ...orderUpdate,
            price: priceUpdated
        };


        const orderUpdated = await this.orderRepository.update(orderUpdate);

        if (!orderUpdated) {
            throw new AppError('Erro ao atualizar o preço do pedido.');
        }

        return orderUpdate;
    }

    async updateStatus({ id, status }) {
        const order = await this.orderRepository.findById(id);

        if (!order) {
            throw new AppError('Pedido não encontrado.')
        }

        const orderUpdated = await this.orderRepository.updateStatus({ status, id })

        return orderUpdated;
    }
}

module.exports = OrderUpdateService;
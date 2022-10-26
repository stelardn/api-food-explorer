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

        // procurar o item no pedido pelo meal id
        const itemIsInOrder = await this.orderItemsRepository.findItemInOrderByMealId(orderUpdate);

        if (itemIsInOrder) {
            const updatedItem = await this.orderItemsRepository.updateExistingItemQuantity(orderUpdate);

        } else {
            const addedItem = await this.orderItemsRepository.addItem(orderUpdate);
        }

        // OK: listar todos os itens incluidos no pedido, com quantidade e preço unitário
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
}

module.exports = OrderUpdateService;
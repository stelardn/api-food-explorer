class OrderCreateService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute({ user_id }) {
        const order = {
            user_id,
            status: 1,
            price: 0,
        };

        const orderCreated = await this.orderRepository.create(order);

        return orderCreated;
    }
}

module.exports = OrderCreateService;
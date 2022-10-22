class OrderRepositoryInMemory{
    orders = [
        {

        }
    ];

    async create({user_id, status, price}){
        const order = {
            id: Math.floor(Math.random() * 1000) + 1,
            user_id,
            status,
            price
        };

        this.orders.push(order);

        return order;
    }
}

module.exports = OrderRepositoryInMemory;
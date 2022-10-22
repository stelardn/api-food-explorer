class UserRepositoryInMemory {
    users = [
        {
            id: 1,
            name: 'John',
            email: 'john@mail.com',
            password: '123'
        },
        {
            id: 2,
            name: 'Joan',
            email: 'joan@mail.com',
            password: '456'
        },

    ];

    async create({ name, email, password }) {
        const user = {
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            email,
            password
        };

        this.users = [...this.users, user];

        return user;
    }

    async findByEmail(email) {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async findById(id) {
        const user = this.users.find(user => user.id === Number(id));

        return user;
    }
}

module.exports = UserRepositoryInMemory;
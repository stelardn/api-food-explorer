/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('meals').del();
    await knex('meals').insert([
        { id: 1, name: 'Salada 1', description: 'Teste teste', price: 17.99, picture: '', type: 'Pratos Principais' },
        { id: 2, name: 'Salada 2', description: 'Teste teste', price: 17.99, picture: '', type: 'Pratos Principais' },
        { id: 3, name: 'Salada 3', description: 'Teste teste', price: 17.99, picture: '', type: 'Pratos Principais' },
        { id: 4, name: 'Salada 4', description: 'Teste teste', price: 17.99, picture: '', type: 'Pratos Principais' },
        { id: 5, name: 'Salada 5', description: 'Teste teste', price: 17.99, picture: '', type: 'Pratos Principais' },
        { id: 6, name: 'Salada 6', description: 'Teste teste', price: 17.99, picture: '', type: 'Pratos Principais' },
        { id: 7, name: 'Salada 7', description: 'Teste teste', price: 17.99, picture: '', type: 'Sobremesas' },
        { id: 8, name: 'Salada 8', description: 'Teste teste', price: 17.99, picture: '', type: 'Sobremesas' },
        { id: 9, name: 'Salada 9', description: 'Teste teste', price: 17.99, picture: '', type: 'Sobremesas' },
        { id: 10, name: 'Salada 10', description: 'Teste teste', price: 17.99, picture: '', type: 'Sobremesas' },
        { id: 11, name: 'Salada 11', description: 'Teste teste', price: 17.99, picture: '', type: 'Sobremesas' },
        { id: 12, name: 'Salada 12', description: 'Teste teste', price: 17.99, picture: '', type: 'Sobremesas' },
        { id: 13, name: 'Salada 13', description: 'Teste teste', price: 17.99, picture: '', type: 'Bebidas' },
        { id: 14, name: 'Salada 14', description: 'Teste teste', price: 17.99, picture: '', type: 'Bebidas' },
        { id: 15, name: 'Salada 15', description: 'Teste teste', price: 17.99, picture: '', type: 'Bebidas' },
        { id: 16, name: 'Salada 16', description: 'Teste teste', price: 17.99, picture: '', type: 'Bebidas' },
        { id: 17, name: 'Salada 17', description: 'Teste teste', price: 17.99, picture: '', type: 'Bebidas' },
        { id: 18, name: 'Salada 18', description: 'Teste teste', price: 17.99, picture: '', type: 'Bebidas' },
    ]);
};

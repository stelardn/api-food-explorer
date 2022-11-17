/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('status').del();
    await knex('status').insert([
        { id: 1, name: 'Carrinho', color: 'white' },
        { id: 2, name: 'Pendente', color: 'red' },
        { id: 3, name: 'Preparando', color: 'orange' },
        { id: 4, name: 'Entregue', color: 'green' }
    ]);
};

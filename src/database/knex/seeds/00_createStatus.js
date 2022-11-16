/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('status').del();
    await knex('status').insert([
        { id: 1, name: 'Pendente', color: 'red' },
        { id: 2, name: 'Preparando', color: 'orange' },
        { id: 3, name: 'Entregue', color: 'green' }
    ]);
};

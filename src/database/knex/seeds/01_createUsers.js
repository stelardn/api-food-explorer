/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        { id: 1, name: 'Admin', email: 'admin@admin.com', password: '$2b$10$Bagq746yTPH62KETb.tBm.PKJYTi/rAjMNqwuxIa8uh8CZP6eIT5q', isAdmin: 1 },
        { id: 2, name: 'Jane', email: 'jane@doe.com', password: '$2b$10$Bagq746yTPH62KETb.tBm.PKJYTi/rAjMNqwuxIa8uh8CZP6eIT5q', isAdmin: 0 }
    ]);
};

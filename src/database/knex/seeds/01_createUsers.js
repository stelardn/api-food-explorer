/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        { id: 1, name: 'Admin', email: 'admin@admin.com', password: '$2y$08$D9CjQeQWd7fsEUnAiLdDeuqB6EBa1mjYR5FjMkoOCM9XgwPPZ..E2', isAdmin: 1 }
    ]);
};

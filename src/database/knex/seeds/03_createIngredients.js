/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('ingredients').del();
    await knex('ingredients').insert([
        { id: 1, name: 'Tomate', meal_id: 1, picture: '' },
        { id: 2, name: 'Alface', meal_id: 2, picture: '' },
        { id: 3, name: 'Alface', meal_id: 3, picture: '' },
        { id: 4, name: 'Tomate', meal_id: 4, picture: '' },
        { id: 5, name: 'Tomate', meal_id: 5, picture: '' },
        { id: 6, name: 'Tomate', meal_id: 6, picture: '' },
        { id: 7, name: 'Tomate', meal_id: 7, picture: '' },
        { id: 8, name: 'Tomate', meal_id: 8, picture: '' },
        { id: 9, name: 'Tomate', meal_id: 9, picture: '' },
        { id: 10, name: 'Tomate', meal_id: 10, picture: '' },
        { id: 11, name: 'Tomate', meal_id: 11, picture: '' },
        { id: 12, name: 'Tomate', meal_id: 12, picture: '' },
        { id: 13, name: 'Tomate', meal_id: 13, picture: '' },
        { id: 14, name: 'Tomate', meal_id: 14, picture: '' },
        { id: 15, name: 'Tomate', meal_id: 15, picture: '' },
        { id: 16, name: 'Tomate', meal_id: 16, picture: '' },
        { id: 17, name: 'Tomate', meal_id: 17, picture: '' },
        { id: 18, name: 'Tomate', meal_id: 18, picture: '' },
    ]);
};

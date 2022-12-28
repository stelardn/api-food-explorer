/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('ingredients').del();
    await knex('ingredients').insert([
        { id: 1, name: 'alface', meal_id: 1, picture: 'alface.png' },
        { id: 2, name: 'tomate', meal_id: 1, picture: 'tomate.png' },
        { id: 3, name: 'rabanete', meal_id: 1, picture: 'rabanete.png' },
        { id: 4, name: 'pão naan', meal_id: 1, picture: 'pao-naan.png' },
        { id: 5, name: 'pão', meal_id: 2, picture: 'pao.png' },
        { id: 6, name: 'presunto', meal_id: 2, picture: 'presunto.png' },
        { id: 7, name: 'rúcula', meal_id: 2, picture: 'rucula.png' },
        { id: 8, name: 'camarão', meal_id: 3, picture: 'camarao.png' },
        { id: 9, name: 'massa', meal_id: 3, picture: 'massa.png' },
        { id: 10, name: 'pesto', meal_id: 3, picture: 'pesto.png' },
        { id: 11, name: 'alface', meal_id: 4, picture: 'alface.png' },
        { id: 12, name: 'tomate', meal_id: 4, picture: 'tomate.png' },
        { id: 13, name: 'pepino', meal_id: 4, picture: 'pepino.png' },
        { id: 14, name: 'ameixa', meal_id: 5, picture: 'ameixa.png' },
        { id: 15, name: 'farinha', meal_id: 5, picture: 'farinha.png' },
        { id: 16, name: 'pêssego', meal_id: 6, picture: 'pessego.png' },
        { id: 17, name: 'farinha', meal_id: 6, picture: 'farinha.png' },
        { id: 18, name: 'amêndoas', meal_id: 7, picture: 'amendoas.png' },
        { id: 19, name: 'claras', meal_id: 7, picture: 'claras.png' },
        { id: 20, name: 'damasco', meal_id: 8, picture: 'damasco.png' },
        { id: 21, name: 'farinha', meal_id: 8, picture: 'farinha.png' },
        { id: 22, name: 'maracujá', meal_id: 9, picture: 'maracuja.png' },
        { id: 23, name: 'café', meal_id: 10, picture: 'cafe.png' },
        { id: 24, name: 'canela', meal_id: 11, picture: 'canela.png' },
        { id: 25, name: 'aniz', meal_id: 11, picture: 'aniz.png' },
        { id: 26, name: 'limão', meal_id: 11, picture: 'limao.png' },
        { id: 27, name: 'canela', meal_id: 12, picture: 'canela.png' },
        { id: 28, name: 'whiskey', meal_id: 12, picture: 'whiskey.png' },
        { id: 29, name: 'maçã', meal_id: 12, picture: 'maca.png' },
    ]);
};

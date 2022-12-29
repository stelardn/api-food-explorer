/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('meals').del();
    await knex('meals').insert([
        {
            id: 1,
            name: 'Salada Ravanello',
            description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
            price: 49.97,
            picture: '001-ravanello.png',
            type: 'Pratos Principais'
        },
        {
            id: 2,
            name: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: 25.97,
            picture: '002-parma.png',
            type: 'Pratos Principais'
        },
        {
            id: 3,
            name: 'Spaguetti Gambe',
            description: 'Massa fresca com camarões e pesto.',
            price: 79.97,
            picture: '003-gambe.png',
            type: 'Pratos Principais'
        },
        {
            id: 4,
            name: 'Salada Molla',
            description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados.',
            price: 19.97,
            picture: '004-molla.png',
            type: 'Pratos Principais'
        },
        {
            id: 5,
            name: 'Prugna Pie',
            description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
            price: 49.97,
            picture: '005-prugna.png',
            type: 'Sobremesas'
        },
        {
            id: 6,
            name: 'Peachy pastrie',
            description: 'Delicioso folheado de pêssego com folhas de hortelã.',
            price: 32.97,
            picture: '006-peachy.png',
            type: 'Sobremesas'
        },
        {
            id: 7,
            name: 'Macarons',
            description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
            price: 79.97,
            picture: '007-macarons.png',
            type: 'Sobremesas'
        },
        {
            id: 8,
            name: 'Bolo de damasco',
            description: 'Damascos frescos em uma massa sem glúten.',
            price: 19.97,
            picture: '008-damasco.png',
            type: 'Sobremesas'
        },
        {
            id: 9,
            name: 'Suco de maracujá',
            description: 'Suco de maracujá gelado, cremoso, docinho.',
            price: 32.97,
            picture: '009-maracuja.png',
            type: 'Bebidas'
        },
        {
            id: 10,
            name: 'Espresso',
            description: 'Café cremoso feito na temperatura e pressões perfeitas.',
            price: 9.99,
            picture: '010-espresso.png',
            type: 'Bebidas'
        },
        {
            id: 11,
            name: 'Tè d`autunno',
            description: 'Chá de anis, canela e limão. Sinta o outono italiano.',
            price: 17.99,
            picture: '011-autunno.png',
            type: 'Bebidas'
        },
        {
            id: 12,
            name: 'Pomo bourbon ',
            description: 'Maçã, whisky, canela. On the rocks.',
            price: 12.99,
            picture: '012-bourbon.png',
            type: 'Bebidas'
        },
    ]);
};

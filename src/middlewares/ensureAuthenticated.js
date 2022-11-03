const authConfig = require('../configs/auth');
const { verify } = require('jsonwebtoken');

const AppError = require('../utils/AppError');

async function ensureAuthenticated((request, response, next) => {

})

module.exports = ensureAuthenticated;
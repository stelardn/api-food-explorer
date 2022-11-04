const { compare } = require('bcrypt');

const UserRepository = require('../repositories/UserRepository');
const userRepository = new UserRepository();

const AppError = require('../utils/AppError');

const authConfig = require('../configs/auth');

const { sign } = require('jsonwebtoken');

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;

        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Usuário não encontrado');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError('Email ou senha incorretos.');
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            expiresIn,
            subject: String(user.id)
        });

        return response.json({ user, token });

    }
}

module.exports = SessionsController;
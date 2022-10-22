const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
const AppError = require('../utils/AppError');
const {describe, beforeEach, it, expect} = require('jest');

describe('UserCreateService', () => {
    let userRepository = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepository);
    });

    it('user should be created', async () => {

        const user = {
            name: 'User Test',
            email: 'usertest@mail.com',
            password: '123'
        };

        const userCreated = await userCreateService.execute(user);

        expect(userCreated).toHaveProperty('id');
    });

    it('user should not be created with existing email', async () => {
        const user1 = {
            name: 'User Test 1',
            email: 'usertest@mail.com',
            password: '123'
        };

        const user2 = {
            name: 'User Test 2',
            email: 'usertest@mail.com',
            password: '456'
        };

        await userCreateService.execute(user1);

        expect(async () => {
            await userCreateService.execute(user2);
        }).rejects.toEqual(new AppError('Já existe uma conta registrada com esse email'));
    });
});
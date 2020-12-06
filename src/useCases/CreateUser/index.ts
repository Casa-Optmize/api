import MysqlUsersRepository from '../../repositories/implementations/MysqlUsersRepository';
import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateIserUseCase';

const mysqlUsersRepository = new MysqlUsersRepository();

const createUserUseCase = new CreateUserUseCase(mysqlUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };

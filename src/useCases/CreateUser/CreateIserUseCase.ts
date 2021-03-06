import User from '../../entities/User';
import { IUsersRespository } from '../../repositories/IUsersRepository';

import { ICreateUserRequestDTO } from './CreateUserDTO';

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRespository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}

export default CreateUserUseCase;
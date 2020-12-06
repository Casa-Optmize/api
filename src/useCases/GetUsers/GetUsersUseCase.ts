import { IUsersRespository } from '../../repositories/IUsersRepository';

class GetUsersUseCase {
  constructor(private usersRepository: IUsersRespository) {}

  async execute() {
    const coins = await this.usersRepository.index();

    return coins;
  }
}

export default GetUsersUseCase;
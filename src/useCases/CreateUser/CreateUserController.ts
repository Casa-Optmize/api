import { Request, Response } from 'express';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import CreateUserUseCase from './CreateIserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name, email, password, cep, address, city, state, neighborhood, marital_status, age, gender,
    }: ICreateUserRequestDTO = request.body;

    try {
      if (
        !name
        || !email
        || !password
        || !cep
        || !address
        || !city
        || !state
        || !neighborhood
        || !marital_status
        || !age
        || !gender
      ) {
        throw new Error('Request does not have all fully data');
      }

      await this.createUserUseCase.execute({
        name, email, password, cep, address, city, state, neighborhood, marital_status, age, gender,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

export default CreateUserController;
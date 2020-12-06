import { Request, Response } from 'express';
import GetUsersUseCase from './GetUsersUseCase';

class GetUsersController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  async handle(_: Request, response: Response): Promise<Response> {
    try {
      const data = await this.getUsersUseCase.execute();

      return response.status(201).send(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

export default GetUsersController;
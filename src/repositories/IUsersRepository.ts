import User from '../entities/User';

export interface IUsersRespository {
  index(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<Boolean>;
  // update(user: User): Promise<Boolean>;
  // delete(user: string): Promise<Boolean>;
}

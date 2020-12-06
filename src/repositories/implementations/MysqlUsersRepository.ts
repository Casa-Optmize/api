import { IUsersRespository } from '../IUsersRepository';
import User from '../../entities/User';
import knex from '../../config/knex';

class MysqlUsersRepository implements IUsersRespository {
  async index(): Promise<User[]> {
    const users: User[] = await knex('users').select('*');

    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user: User = await knex('users').where('email', email).first();

    return user;
  }

  async save(user: User): Promise<Boolean> {
    const data = await knex('users').insert(user);

    if (!data) {
      return false;
    }

    return true;
  }

  // async update(user: User): Promise<Boolean> {
  //   const data = await knex('users')
  //     .update({
  //       name: user.name,
  //     })
  //     .where('uid', user.uid);

  //   if (!data) {
  //     return false;
  //   }

  //   return true;
  // }

  // async delete(uid: string): Promise<Boolean> {
  //   const data = await knex('users').where('uid', uid).del();

  //   if (!data) {
  //     return false;
  //   }

  //   return true;
  // }
}

export default MysqlUsersRepository;
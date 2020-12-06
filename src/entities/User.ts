import { v4 as uuidv4 } from 'uuid';

class User {
  public readonly uid: string;

  public name: string;

  constructor(props: Omit<User, 'uid'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.uid = uuidv4();
    }
  }
}

export default User;

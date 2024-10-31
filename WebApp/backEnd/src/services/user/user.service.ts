import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/userdto';

@Injectable()
export class UserService {
  private readonly users: UserDTO[] = [];
  getAllUsers() {
    return this.users;
  }

  getUser(index: number) {
    try {
      return this.users[index - 1];
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  createUser(user: UserDTO) {
    this.users.push(user);
    return 'account Created';
  }
}

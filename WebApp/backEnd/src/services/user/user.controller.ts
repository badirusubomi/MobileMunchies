import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/userdto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    try {
      return this.userService.getUser(id);
    } catch (e) {
      throw new HttpException(
        'Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e,
        },
      );
    }
  }

  @Post('create')
  createUser(@Body() createUserDTO: UserDTO) {
    return this.userService.createUser(createUserDTO);
  }
}

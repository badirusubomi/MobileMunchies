import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly passwordHash: string;

  @IsDateString()
  @IsNotEmpty()
  readonly creationDate: Date;
}

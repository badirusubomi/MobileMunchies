import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDTO {
  @IsString()
  @IsNotEmpty()
  readonly storeName: string;

  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @IsNotEmpty()
  @IsDateString()
  readonly date: Date;
}

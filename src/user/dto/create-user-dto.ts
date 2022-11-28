import { IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

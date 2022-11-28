import { IsString, IsNumber, IsEmail, IsEnum, IsIn } from 'class-validator';
import { Role } from './user-role-dto';

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
  @IsEnum(Role)
  @IsIn([Role.Admin, Role.User])
  role: Role;
}

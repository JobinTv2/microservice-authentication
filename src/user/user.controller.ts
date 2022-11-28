import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('auth/login')
  async login(@Body() loginUserDto: { email: string; password: string }) {
    console.log(loginUserDto);
    return this.authService.login(loginUserDto);
  }

  // @UseGuards(AuthGuard('local'))
  // @Get
}

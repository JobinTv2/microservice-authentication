import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Param,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/auth-guard/jwt-auth-guard';
import { LocalAuthGuard } from 'src/auth/auth-guard/local-auth-gaurd';
import { RolesGuard } from 'src/auth/auth-guard/roles-guard';
import { AuthService } from 'src/auth/auth.service';
import { HasRoles } from 'src/auth/has-roles.decorator';
import { CreateUserDto } from './dto/create-user-dto';
import { Role } from './dto/user-role-dto';
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

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() loginUserDto: { email: string; password: string }) {
    return this.authService.login(loginUserDto);
  }

  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }
}

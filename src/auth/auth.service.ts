import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  }

  async login(user: any) {
    const userData = await this.userService.findOneByEmail(user.email);
    const payload = {
      email: userData.email,
      id: userData.id,
      role: userData.role,
      firstname: userData.firstname,
      lastname: userData.lastname,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

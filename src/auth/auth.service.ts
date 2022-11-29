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
    console.log(user);
    const payload = {
      email: user.email,
      id: user.userId,
      role: user.roles,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

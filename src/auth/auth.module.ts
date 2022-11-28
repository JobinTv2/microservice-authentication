import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { LocalStrategy } from './strategy/local.startegy';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
@Module({
  imports: [
    UserModule,
    PassportModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'screte&123',
      signOptions: {
        expiresIn: '2d',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, UserService],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}

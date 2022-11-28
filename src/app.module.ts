import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'basicMicroserviceDB',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      autoLoadEntities: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const result = await this.userRepository
      .save(createUserDto)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    return result;
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
}

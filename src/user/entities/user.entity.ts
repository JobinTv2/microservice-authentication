import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Role } from '../dto/user-role-dto';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  role: string;
}

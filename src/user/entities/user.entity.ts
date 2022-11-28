import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}

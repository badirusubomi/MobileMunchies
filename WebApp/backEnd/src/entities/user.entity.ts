import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  passwordHash: string;

  @Column('varchar')
  email: string;

  @Column({ type: 'date' })
  accountCreationDate: Date;
}

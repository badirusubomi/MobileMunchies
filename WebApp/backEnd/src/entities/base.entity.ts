import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('BaseEntity')
export class BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'date' })
  createdDate: Date;

  @Column({ type: 'date' })
  deletedDate: Date;
}

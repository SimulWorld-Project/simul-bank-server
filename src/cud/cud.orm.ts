import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'citizen_unique_document' })
export class CudOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  number: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'date', nullable: false })
  birthDate: string;

  @Column()
  motherName: string;
}

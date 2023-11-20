import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'citizen' })
export class CitizenOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  birthDate: string;

  @Column({ unique: true })
  citizenUniqueDocument: string;

  @Column()
  motherName: string;

  @Column()
  fatherName: string;
}

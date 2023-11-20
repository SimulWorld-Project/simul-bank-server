import { Expose } from 'class-transformer';
import { IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class Citizen {
  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsDateString()
  birthDate: string;

  @Expose()
  @IsNotEmpty()
  document: string;

  @Expose()
  @IsString()
  motherName: string;

  @Expose()
  @IsString()
  fatherName: string;
}

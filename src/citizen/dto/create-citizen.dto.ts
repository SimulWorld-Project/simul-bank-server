import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsDateString,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateCitizenDto {
  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsDateString()
  birthDate: string;

  @Expose()
  @IsString()
  motherName: string;

  @Expose()
  @IsString()
  fatherName: string;

  @Expose()
  @IsString()
  @IsOptional()
  document: string;
}

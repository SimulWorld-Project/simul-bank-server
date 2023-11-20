import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CudOrm } from './cud.orm';
import { CreateCudDto } from './cud.dto';
import { getCheckDigit, transformNumberSingleDigit } from './cut.utils';

@Injectable()
export class CudService {
  constructor(
    @InjectRepository(CudOrm) private repository: Repository<CudOrm>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  async create(dto: CreateCudDto) {
    const year = dto.birthDate.getFullYear();
    const month = dto.birthDate.getMonth() + 1;
    const day = dto.birthDate.getDate();

    const documentNumber = await this.generateNumber({
      year: dto.birthDate.getFullYear(),
      month: dto.birthDate.getMonth() + 1,
      day: dto.birthDate.getDate(),
    });

    const stringBirthDate = `${year}-${month}-${day}`;

    const cudEntity = this.repository.create({
      name: dto.name,
      number: documentNumber,
      birthDate: stringBirthDate,
      motherName: dto.motherName,
    });

    const createdCud = await this.repository.save(cudEntity);

    return createdCud;
  }

  private async generateNumber(dateBirth: {
    year: number;
    month: number;
    day: number;
  }) {
    const cudCount = await this.repository.count();

    const currentCountNumber = cudCount + 1;
    const yearDigit = transformNumberSingleDigit(dateBirth.year);
    const monthDigit = transformNumberSingleDigit(dateBirth.month);
    const dayDigit = transformNumberSingleDigit(dateBirth.day);

    const documentBaseNumber = Number(
      `${currentCountNumber}${yearDigit}${monthDigit}${dayDigit}`,
    );

    const checkDigits = getCheckDigit(documentBaseNumber);

    return Number(`${documentBaseNumber}${checkDigits}`);
  }

  checkNumberValidation(document: number) {
    const baseDocumentNumber = String(document).slice(0, -2);
    const checkDigits = getCheckDigit(document);

    return String(document) === `${baseDocumentNumber}${checkDigits}`;
  }

  async checkDocumentData(data: {
    document: number;
    name: string;
    birthDate: string;
    motherName: string;
  }) {
    const documentEntity = await this.repository.findOneBy({
      number: data.document,
      name: data.name,
      birthDate: data.birthDate,
      motherName: data.motherName,
    });

    if (!documentEntity) {
      return false;
    }

    return true;
  }
}

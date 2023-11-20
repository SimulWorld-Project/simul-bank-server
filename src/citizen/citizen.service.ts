import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { CitizenOrm } from './citizen.orm';
import { CudService } from 'src/cud/cud.service';

@Injectable()
export class CitizenService {
  constructor(
    @InjectRepository(CitizenOrm) private repository: Repository<CitizenOrm>,
    private readonly cudService: CudService,
  ) {}

  async create(createCitizenDto: CreateCitizenDto) {
    const [year, month, day] = createCitizenDto.birthDate
      .split(/[\-\/]/)
      .map((v) => Number(v));

    const birthDate = new Date(year, month - 1, day);

    if (createCitizenDto.document) {
      const isValidDocument = await this.cudService.checkDocumentData({
        ...createCitizenDto,
        document: Number(createCitizenDto.document),
      });

      if (!isValidDocument) {
        throw new Error('Invalid document');
      }

      const entity = this.repository.create({
        ...createCitizenDto,
        citizenUniqueDocument: String(createCitizenDto.document),
      });

      return this.repository.save(entity);
    }

    const documentNumber = await this.cudService.create({
      name: createCitizenDto.name,
      motherName: createCitizenDto.motherName,
      birthDate,
    });

    const entity = this.repository.create({
      ...createCitizenDto,
      citizenUniqueDocument: String(documentNumber.number),
    });

    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  findBy(params: any) {
    return this.repository.findBy(params);
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }
}

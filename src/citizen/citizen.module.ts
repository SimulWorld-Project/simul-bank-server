import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { CitizenService } from './citizen.service';
import { CitizenController } from './citizen.controller';
import { CitizenOrm } from './citizen.orm';
import { CudModule } from 'src/cud/cud.module';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([CitizenOrm]), CudModule],
  controllers: [CitizenController],
  providers: [CitizenService],
})
export class CitizenModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { CudService } from './cud.service';
import { CudController } from './cud.controller';
import { CudOrm } from './cud.orm';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([CudOrm])],
  controllers: [CudController],
  providers: [CudService],
  exports: [CudService],
})
export class CudModule {}

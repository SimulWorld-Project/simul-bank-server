import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService, OtherThing } from './app.service';
import { CitizenModule } from './citizen/citizen.module';
import { CudModule } from './cud/cud.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CitizenModule, CudModule],
  controllers: [AppController],
  providers: [AppService, OtherThing],
})
export class AppModule {}

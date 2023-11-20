import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CitizenOrm } from 'src/citizen/citizen.orm';
import { CudOrm } from 'src/cud/cud.orm';

export const DatabaseModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const config = {
      type: configService.get('DATABASE') as 'postgres' | 'mysql' | 'mongodb',
      host: configService.get('DATABASE_HOST'),
      port: +configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [CitizenOrm, CudOrm],
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    };

    return config;
  },
});

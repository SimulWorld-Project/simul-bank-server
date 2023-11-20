import { Test, TestingModule } from '@nestjs/testing';
import { CudController } from './cud.controller';
import { CudService } from './cud.service';

describe('CudController', () => {
  let controller: CudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CudController],
      providers: [CudService],
    }).compile();

    controller = module.get<CudController>(CudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CudService } from './cud.service';

describe('CudService', () => {
  let service: CudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CudService],
    }).compile();

    service = module.get<CudService>(CudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

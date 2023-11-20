import { Controller } from '@nestjs/common';
import { CudService } from './cud.service';

@Controller()
export class CudController {
  constructor(private readonly cudService: CudService) {}
}

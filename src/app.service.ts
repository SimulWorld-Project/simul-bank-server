import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBye(): string {
    return 'Bye World!';
  }
}

@Injectable()
export class OtherThing {
  constructor(private readonly appService: AppService) {}

  getByeProxy(): string {
    return this.appService.getBye();
  }
}

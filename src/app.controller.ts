import { Controller, Get, Redirect, Param, Post, Body } from '@nestjs/common';
import { AppService, OtherThing } from './app.service';

class Person {
  name: string;
  age: number;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly otherThing: OtherThing,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('say')
  say(
    @Param() params: any,
    // @Param('name') name: string,
    // @Param('age') age: number,
  ) {
    console.log('????', params);
    return 'ok';
  }

  @Get('bye')
  bye() {
    return this.otherThing.getByeProxy();
  }

  @Post()
  postSomething(@Body() person: Person) {
    console.log('.....', person);

    return 'ok!!!!';
  }
}

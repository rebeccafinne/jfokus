import { Controller, Get } from '@nestjs/common';

import { Message } from '@company-repo/api-interfaces';

import { AppService } from './app.service';

//Hello
//Hello
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}

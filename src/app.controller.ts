import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): any {
    return [
      {
        id: 1,
        username: 'Anatoliy',
      },
      {
        id: 2,
        username: 'Valeriy',
      },
    ];
  }

  @Get('/objects')
  getObjects(): any {
    return [
      {
        id: 1,
        address: 'місто Київ, вулиця Володимирська, будинок 2',
        ownerId: '1',
        cost: '1000',
      },
      {
        id: 2,
        address: 'місто Київ, вулиця Хрещатик, будинок 4',
        ownerId: '2',
        cost: '3000',
      },
      {
        id: 3,
        address: 'місто Київ, вулиця Вишгородська, будинок 12',
        ownerId: '2',
        cost: '500',
      },
    ];
  }
}

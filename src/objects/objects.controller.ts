import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { CreateObjectDto } from './dto/createObject.dto';
import { ObjectsService } from './objects.service';

@Controller('objects')
export class ObjectsController {
  constructor(private objectService: ObjectsService) {}

  @Post()
  create(@Body() objectDto: CreateObjectDto) {
    return this.objectService.createObject(objectDto);
  }

  @Get()
  getAll() {
    return this.objectService.getAllObjects();
  }

  @Get('/:value')
  getObjectById(@Param('value') value: string) {
    return this.objectService.getObjectById(value);
  }
}

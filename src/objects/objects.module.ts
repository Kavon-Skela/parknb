import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ObjectsController } from './objects.controller';
import { Objects } from './objects.model';
import { ObjectsService } from './objects.service';

@Module({
  controllers: [ObjectsController],
  providers: [ObjectsService],
  imports: [SequelizeModule.forFeature([Objects])],
})
export class ObjectsModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateObjectDto } from './dto/createObject.dto';
import { Objects } from './objects.model';

@Injectable()
export class ObjectsService {
  constructor(
    @InjectModel(Objects) private objectsRepository: typeof Objects,
  ) {}

  async createObject(dto: CreateObjectDto) {
    const object = await this.objectsRepository.create(dto);
    return object;
  }

  async getAllObjects() {
    const objects = this.objectsRepository.findAll();
    return objects;
  }

  async getObjectById(id: string) {
    const object = this.objectsRepository.findByPk(id);
    return object;
  }
}

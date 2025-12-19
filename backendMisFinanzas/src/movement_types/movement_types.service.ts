import { Injectable } from '@nestjs/common';
import { CreateMovementTypeDto } from './dto/create-movement_type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement_type.dto';

@Injectable()
export class MovementTypesService {
  create(createMovementTypeDto: CreateMovementTypeDto) {
    return 'This action adds a new movementType';
  }

  findAll() {
    return `This action returns all movementTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movementType`;
  }

  update(id: number, updateMovementTypeDto: UpdateMovementTypeDto) {
    return `This action updates a #${id} movementType`;
  }

  remove(id: number) {
    return `This action removes a #${id} movementType`;
  }
}

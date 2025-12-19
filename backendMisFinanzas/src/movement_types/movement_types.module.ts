import { Module } from '@nestjs/common';
import { MovementTypesService } from './movement_types.service';
import { MovementTypesController } from './movement_types.controller';

@Module({
  controllers: [MovementTypesController],
  providers: [MovementTypesService],
})
export class MovementTypesModule {}

import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movement } from './entities/movement.entity';

@Module({
  controllers: [MovementsController],
  providers: [MovementsService],
  imports: [
    TypeOrmModule.forFeature([Movement])
  ],
})
export class MovementsModule {}

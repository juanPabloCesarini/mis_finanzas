import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movements' })
export class Movement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  date_of_movement: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  beginning_balance: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  final_balance: number;

  @Column('text')
  description: string;
}

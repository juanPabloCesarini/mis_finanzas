import { Account } from 'src/accounts/entities/account.entity';
import { Category } from 'src/categories/entities/category.entity';
import { MovementType } from 'src/movement_types/entities/movement_type.entity';
import { Subcategory } from 'src/subcategories/entities/subcategory.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  // timestamps automáticos
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  // soft delete
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;

  // Muchos movimientos pertenecen a una cuenta
  @ManyToOne(() => Account, (account) => account.movement)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @ManyToOne(() => Category, (category) => category.movement)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.movement)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;

  @ManyToOne(() => MovementType, (movementType) => movementType.movement)
  @JoinColumn({ name: 'movementType_id' })
  movementType: MovementType;
}

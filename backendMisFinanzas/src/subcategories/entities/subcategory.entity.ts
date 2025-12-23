import { Category } from 'src/categories/entities/category.entity';
import { Movement } from 'src/movements/entities/movement.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'subcategories' })
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  color: string;

  // timestamps automáticos
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  // soft delete
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;

  // Muchas subcategorías pertenecen a una categoría
  @ManyToOne(() => Category, (category) => category.subcategories)
  @JoinColumn({ name: 'category_id' }) // nombre claro para la FK en la tabla subcategories
  category: Category;

  @OneToMany(() => Movement, (movement) => movement.subcategory)
  movement: Movement[];
}

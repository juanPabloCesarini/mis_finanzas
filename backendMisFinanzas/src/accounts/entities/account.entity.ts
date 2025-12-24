import { Movement } from 'src/movements/entities/movement.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'accounts' })
export class Account {
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
  
    @OneToMany(() => Movement, (movement) => movement.account)
    movement: Movement[];

  @BeforeInsert()
  @BeforeUpdate()
  checkAccount() {
    if (this.name) {
      this.name = this.name
        .toUpperCase()
        .replaceAll(' ', '_')
        .replaceAll("'", '');
    }
  }
}

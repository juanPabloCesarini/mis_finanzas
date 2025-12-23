import { Movement } from "src/movements/entities/movement.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'movement_types' })
export class MovementType {

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
      
        @OneToMany(() => Movement, (movement) => movement.movementType)
        movement: Movement[];

    @BeforeInsert()
    @BeforeUpdate()
    checkAccount() {
        this.name = this.name
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }
}

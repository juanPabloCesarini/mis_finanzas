import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

    

@Entity({ name: 'subcategories' })
export class Subcategory {

    @PrimaryGeneratedColumn()
    id: number;
    @Column('text')
    name: string;


    @BeforeInsert()
    @BeforeUpdate()
    checkAccount() {
        this.name = this.name
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }
}
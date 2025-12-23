import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'categories'})
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    color: string;
 }

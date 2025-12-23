import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'subcategories' })
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  color: string;
}

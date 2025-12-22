import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'accounts' })
export class Account {
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

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('jigsawmodules')
export class JigsawModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modulename: string;

  @Column()
  userid: number;

  @Column({
    nullable: true,
  })
  name: string;
}

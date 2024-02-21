import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// @Entity('jigsawmodules')
// export class JigsawModule {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   modulename: string;

//   @Column()
//   userid: number;

//   @Column({
//     nullable: true,
//   })
//   name: string;
// }



@Entity('jigsawmodules')
export class JigsawModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userid: number;

  @Column()
  version: string;

  @Column()
  codeHash: string;

  @Column()
  npmModules: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}




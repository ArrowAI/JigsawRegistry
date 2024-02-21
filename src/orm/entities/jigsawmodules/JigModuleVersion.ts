import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// @Entity('jigsawmoduleversions')
// export class JigsawModuleVersion {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   modulename: string;

//   @Column()
//   versionId: number;
// }
@Entity('versions')
export class Version {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  moduleId: number;

  @Column()
  versionNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

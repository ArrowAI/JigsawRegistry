import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('jigsawmoduleversions')
export class JigsawModuleVersion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modulename: string;

  @Column()
  versionId: number;
}

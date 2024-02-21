
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('build_assets')
export class BuildAsset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  moduleId: string;

  @Column()
  assetName: string;

  @Column()
  assetUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
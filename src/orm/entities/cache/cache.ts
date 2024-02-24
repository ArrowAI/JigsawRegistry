
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';



@Entity('cache')
export class Cache {
  @PrimaryGeneratedColumn()
  cacheId: number;

  @Column()
  cacheUrl: string;

  @Column()
  cacheHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
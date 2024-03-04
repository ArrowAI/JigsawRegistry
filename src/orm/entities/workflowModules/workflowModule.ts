import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('nodes')
export class WorkflowModule {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 name: string;

 @Column()
 npmRepo: string;

 @CreateDateColumn()
 created: Date;

 @UpdateDateColumn()
 updated: Date;

 @Column()
 displayName: string;

 @Column()
 logoUrl: string;

 @Column()
 description: string;

 @Column()
 version: string;

 @Column()
 minimumSupportedRelease: string;

 @Column()
 maximumSupportedRelease: string;

 @Column({ type: 'text', nullable: true })
 actions: string;

 @Column({ type: 'text', nullable: true })
 triggers: string;

 @Column({ type: 'text', nullable: true })
 auth: string;
}
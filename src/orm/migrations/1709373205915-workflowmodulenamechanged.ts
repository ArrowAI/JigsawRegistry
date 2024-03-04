import {MigrationInterface, QueryRunner} from "typeorm";

export class workflowmodulenamechanged1709373205915 implements MigrationInterface {
    name = 'workflowmodulenamechanged1709373205915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "nodes" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar NOT NULL,
                "created" datetime NOT NULL DEFAULT (datetime('now')),
                "updated" datetime NOT NULL DEFAULT (datetime('now')),
                "display_name" varchar NOT NULL,
                "logo_url" varchar NOT NULL,
                "description" varchar NOT NULL,
                "version" varchar NOT NULL,
                "minimum_supported_release" varchar NOT NULL,
                "maximum_supported_release" varchar NOT NULL,
                "actions" text,
                "triggers" text,
                "auth" text
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "nodes"
        `);
    }

}

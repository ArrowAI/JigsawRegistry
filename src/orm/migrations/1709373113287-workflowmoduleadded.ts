import {MigrationInterface, QueryRunner} from "typeorm";

export class workflowmoduleadded1709373113287 implements MigrationInterface {
    name = 'workflowmoduleadded1709373113287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "example_node" (
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
            DROP TABLE "example_node"
        `);
    }

}

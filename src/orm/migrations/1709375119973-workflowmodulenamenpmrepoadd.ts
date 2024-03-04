import {MigrationInterface, QueryRunner} from "typeorm";

export class workflowmodulenamenpmrepoadd1709375119973 implements MigrationInterface {
    name = 'workflowmodulenamenpmrepoadd1709375119973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "temporary_nodes" (
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
                "auth" text,
                "npm_repo" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_nodes"(
                    "id",
                    "name",
                    "created",
                    "updated",
                    "display_name",
                    "logo_url",
                    "description",
                    "version",
                    "minimum_supported_release",
                    "maximum_supported_release",
                    "actions",
                    "triggers",
                    "auth"
                )
            SELECT "id",
                "name",
                "created",
                "updated",
                "display_name",
                "logo_url",
                "description",
                "version",
                "minimum_supported_release",
                "maximum_supported_release",
                "actions",
                "triggers",
                "auth"
            FROM "nodes"
        `);
        await queryRunner.query(`
            DROP TABLE "nodes"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_nodes"
                RENAME TO "nodes"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "nodes"
                RENAME TO "temporary_nodes"
        `);
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
        await queryRunner.query(`
            INSERT INTO "nodes"(
                    "id",
                    "name",
                    "created",
                    "updated",
                    "display_name",
                    "logo_url",
                    "description",
                    "version",
                    "minimum_supported_release",
                    "maximum_supported_release",
                    "actions",
                    "triggers",
                    "auth"
                )
            SELECT "id",
                "name",
                "created",
                "updated",
                "display_name",
                "logo_url",
                "description",
                "version",
                "minimum_supported_release",
                "maximum_supported_release",
                "actions",
                "triggers",
                "auth"
            FROM "temporary_nodes"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_nodes"
        `);
    }

}

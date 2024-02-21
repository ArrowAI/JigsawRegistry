import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1708498934149 implements MigrationInterface {
    name = 'InitialMigration1708498934149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "cache" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "cache_id" varchar NOT NULL,
                "cache_url" varchar NOT NULL,
                "cache_hash" varchar NOT NULL,
                "created_at" datetime NOT NULL DEFAULT (datetime('now')),
                "updated_at" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "functions" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar NOT NULL,
                "detail" varchar NOT NULL,
                "cache_id" varchar NOT NULL,
                "cache_url" varchar NOT NULL,
                "created_at" datetime NOT NULL DEFAULT (datetime('now')),
                "updated_at" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "jigsawmodules" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar NOT NULL,
                "userid" integer NOT NULL,
                "version" varchar NOT NULL,
                "code_hash" varchar NOT NULL,
                "npm_modules" varchar NOT NULL,
                "created_at" datetime NOT NULL DEFAULT (datetime('now')),
                "updated_at" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "build_assets" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "module_id" varchar NOT NULL,
                "asset_name" varchar NOT NULL,
                "asset_url" varchar NOT NULL,
                "created_at" datetime NOT NULL DEFAULT (datetime('now')),
                "updated_at" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "versions" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "module_id" integer NOT NULL,
                "version_number" varchar NOT NULL,
                "created_at" datetime NOT NULL DEFAULT (datetime('now')),
                "updated_at" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar NOT NULL,
                "password" varchar NOT NULL,
                "username" varchar,
                "name" varchar,
                "role" varchar(30) NOT NULL DEFAULT ('STANDARD'),
                "language" varchar(15) NOT NULL DEFAULT ('en-US'),
                "created_at" datetime NOT NULL DEFAULT (datetime('now')),
                "updated_at" datetime NOT NULL DEFAULT (datetime('now')),
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "users"
        `);
        await queryRunner.query(`
            DROP TABLE "versions"
        `);
        await queryRunner.query(`
            DROP TABLE "build_assets"
        `);
        await queryRunner.query(`
            DROP TABLE "jigsawmodules"
        `);
        await queryRunner.query(`
            DROP TABLE "functions"
        `);
        await queryRunner.query(`
            DROP TABLE "cache"
        `);
    }

}

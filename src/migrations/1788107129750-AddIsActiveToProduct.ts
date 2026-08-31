import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActiveToProduct1788107129750 implements MigrationInterface {
    name = 'AddIsActiveToProduct1788107129750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isActive"`);
    }

}

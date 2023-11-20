import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCudTable1700510264820 implements MigrationInterface {
  name = 'CreateCudTable1700510264820';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "citizen_unique_document" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "name" character varying NOT NULL, "birth_date" date NOT NULL, "mother_name" character varying NOT NULL, CONSTRAINT "UQ_a24300c1fecd0bb0bca1120afc2" UNIQUE ("number"), CONSTRAINT "PK_0ec6a201c10fbf45219f7d876a5" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "citizen_unique_document"`);
  }
}

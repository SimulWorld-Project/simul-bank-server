import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCitizenTable1700501539328 implements MigrationInterface {
  name = 'CreateCitizenTable1700501539328';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "citizen" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birth_date" date NOT NULL, "citizen_unique_document" character varying NOT NULL, "mother_name" character varying NOT NULL, "father_name" character varying NOT NULL, CONSTRAINT "UQ_18af003cd33b91f4e4a610f26f1" UNIQUE ("citizen_unique_document"), CONSTRAINT "PK_0e19d9fdbdd0d185ce72fe62a04" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "citizen"`);
  }
}

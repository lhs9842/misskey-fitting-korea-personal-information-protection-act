/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class AddKoreaPrivacyConsentUrls1792425731406 {
    name = 'AddKoreaPrivacyConsentUrls1792425731406'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ADD "personalInfoCollectionUrl" character varying(1024)`);
        await queryRunner.query(`ALTER TABLE "meta" ADD "personalInfoThirdPartyUrl" character varying(1024)`);
        await queryRunner.query(`ALTER TABLE "meta" ADD "personalInfoOverseasUrl" character varying(1024)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "personalInfoCollectionUrl"`);
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "personalInfoThirdPartyUrl"`);
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "personalInfoOverseasUrl"`);
    }
}

-- AlterTable
ALTER TABLE "convidados" ALTER COLUMN "presenca" DROP NOT NULL,
ALTER COLUMN "presenca" DROP DEFAULT,
ALTER COLUMN "bebidaAlcoolica" DROP NOT NULL,
ALTER COLUMN "bebidaAlcoolica" DROP DEFAULT;

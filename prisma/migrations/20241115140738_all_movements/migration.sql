-- AlterTable
ALTER TABLE "wallet" ADD COLUMN     "all_incomes" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "all_outcomes" DOUBLE PRECISION NOT NULL DEFAULT 0;

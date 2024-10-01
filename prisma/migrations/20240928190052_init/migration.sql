/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `senha` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "senha" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

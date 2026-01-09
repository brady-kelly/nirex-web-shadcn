/*
  Warnings:

  - Added the required column `localPrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "imageFile" TEXT,
ADD COLUMN     "localPrice" MONEY NOT NULL,
ADD COLUMN     "packageSize" TEXT,
ADD COLUMN     "packageWeight" TEXT,
ADD COLUMN     "volume" TEXT,
ADD COLUMN     "workingSize" TEXT;

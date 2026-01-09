/*
  Warnings:

  - You are about to drop the `SiteContacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SiteContacts";

-- CreateTable
CREATE TABLE "SiteContact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "SiteContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SiteContact_name_key" ON "SiteContact"("name");

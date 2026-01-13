/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `SiteConfig` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SiteConfig_name_key" ON "SiteConfig"("name");

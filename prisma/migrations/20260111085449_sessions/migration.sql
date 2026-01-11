-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

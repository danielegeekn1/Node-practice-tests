-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "filename" TEXT,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

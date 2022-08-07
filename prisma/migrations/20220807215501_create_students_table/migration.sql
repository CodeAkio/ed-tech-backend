-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "ra" VARCHAR(140) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_ra_key" ON "students"("ra");

-- CreateIndex
CREATE UNIQUE INDEX "students_cpf_key" ON "students"("cpf");

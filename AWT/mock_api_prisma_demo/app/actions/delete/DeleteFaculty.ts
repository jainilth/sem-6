"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";

export default async function DeleteFaculty(id: number) {
  await prisma.faculties.delete({ where: { id } });
  revalidatePath("/home/faculties");
  redirect("/home/faculties");
}
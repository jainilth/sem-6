"use server"

import { prisma } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function DeleteUser(id: number) {
    await prisma.users.delete({ where: { id } })
    revalidatePath("/home/users")
    redirect("/home/users")
}

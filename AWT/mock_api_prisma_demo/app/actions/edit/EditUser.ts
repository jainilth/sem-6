"use server"

import { prisma } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function EditUser(formData: FormData) {
    const uid= formData.get("id") as any as number
    const saveObj = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        city: formData.get("city") as string
    }
    await prisma.users.update({ where: { id:Number(uid) }, data: saveObj })
    revalidatePath("/home/users")
    redirect("/home/users")
}

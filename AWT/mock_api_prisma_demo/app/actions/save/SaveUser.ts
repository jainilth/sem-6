"use server"

import { prisma } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function SaveUser(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const phone = formData.get('phone') as string
    const city = formData.get('city') as string


    const data = {
        name, email, password_hash: password, phone, city
    }

    await prisma.users.create({ data })
    revalidatePath("/home/users")
    redirect("/home/users")
}

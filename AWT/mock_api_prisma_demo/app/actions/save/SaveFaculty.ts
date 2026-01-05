"use server"
import { prisma } from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function SaveFaculty(formData: FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const city = formData.get("city") as string

    const data = {
        name, email, phone, city
    }

    await prisma.faculties.create({data})
    revalidatePath("/home/faculties")
    redirect("/home/faculties")
}

import EditUser from '@/app/actions/edit/EditUser'
import { users } from '@/app/generated/prisma/browser'
import { prisma } from '@/app/lib/prisma'
import Link from 'next/link'
import React from 'react'

export default async function UserEdit({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params

  const data = (await prisma.users.findFirst({
    where: { id: Number(id) },
  })) as users | null

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            User not found
          </h1>
          <p className="text-gray-500 mb-6">
            The user you are looking for does not exist or was removed.
          </p>
          <Link
            href="/home/users"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
          >
            ← Back to users
          </Link>
        </div>
      </div>
    )
  }

  return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Add New User</h2>
        <form className="space-y-6" action={EditUser}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input type="hidden" name='id' defaultValue={data.id}/>
            <input 
              type="text" 
              id="name" 
              defaultValue={data.name}
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              defaultValue={data.email as string}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              defaultValue={data.phone as string}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input 
              type="text" 
              id="city" 
              defaultValue={data.city as string}
              name="city"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

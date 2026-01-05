import { users } from '@/app/generated/prisma/browser'
import { prisma } from '@/app/lib/prisma'
import Link from 'next/link'
import React from 'react'

export default async function UserDetails({
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/home/users"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <span className="text-lg">←</span>
            <span>Back to users</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">
              User Profile
            </p>
            <h1 className="mt-2 text-3xl font-semibold">{data.name}</h1>
            <p className="mt-1 text-sm text-blue-100">
              ID: <span className="font-mono">#{data.id}</span>
            </p>
          </div>

          {/* Body */}
          <div className="px-8 py-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Full name
                </p>
                <p className="text-lg font-medium text-gray-900">
                  {data.name}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Email
                </p>
                <p className="text-sm font-mono text-gray-700 break-all bg-gray-50 px-3 py-2 rounded-xl border border-gray-100">
                  {data.email}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  City
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                  {data.city}
                </span>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="px-8 py-5 border-t border-gray-100 bg-gray-50 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link href={`/home/users/edit/${data.id}`} className="inline-flex justify-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
              Edit
            </Link>
            <button className="inline-flex justify-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

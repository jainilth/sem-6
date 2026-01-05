import Link from 'next/link'
import React from 'react'
import Student from '@/types/Student'

export default async function StudentDetial({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params
  let data = await fetch(`https://6835982dcd78db2058c2552b.mockapi.io/student/${id}`)
  let stu: Student = await data.json()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl border border-white/50 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-2xl font-bold tracking-tight">Student Details</h1>
              <Link 
                href="/home/student" 
                className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-sm font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                ← Back to List
              </Link>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-8">
            <dl className="space-y-6">
              {/* ID Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 group">
                <dt className="w-28 text-sm font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 group-hover:border-blue-300 transition-colors">
                  Student ID
                </dt>
                <dd className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  {stu.id}
                </dd>
              </div>

              {/* Name Field */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 group">
                <dt className="w-28 text-sm font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 group-hover:border-emerald-300 self-start transition-colors">
                  Name
                </dt>
                <dd className="text-xl font-bold text-gray-900 ml-0 sm:ml-4">
                  {stu.name}
                </dd>
              </div>

              {/* Enrollment Field */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 group">
                <dt className="w-28 text-sm font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 group-hover:border-purple-300 self-start transition-colors">
                  Enrollment
                </dt>
                <dd className="text-lg font-mono text-gray-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                  {stu.enrollment}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

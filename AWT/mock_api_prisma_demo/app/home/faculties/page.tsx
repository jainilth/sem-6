import DeleteFaculty from '@/app/actions/delete/DeleteFaculty'
import { faculties } from '@/app/generated/prisma/browser'
import { prisma } from '@/app/lib/prisma'
import Deletebtn from '@/app/ui/Deletebtn'
import Link from 'next/link'
import React from 'react'

async function Faculties() {
  const data = await prisma.faculties.findMany()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Faculty Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            View and manage faculty information with detailed profiles
          </p>
        </div>

        <Link href={"faculties/add"} className="inline-flex px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">Add Faculties</Link>

        {/* Glassmorphism Table Container */}
        <div className="bg-white/60 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm">
              {/* Gradient Header */}
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th scope="col" className="px-8 py-6 text-left font-semibold rounded-tl-2xl">
                    ID
                  </th>
                  <th scope="col" className="px-8 py-6 text-left font-semibold">
                    Name
                  </th>
                  <th scope="col" className="px-8 py-6 text-left font-semibold">
                    Email
                  </th>
                  <th scope="col" className="px-8 py-6 text-left font-semibold">
                    City
                  </th>
                  <th align={'center'} colSpan={2} scope="col" className="px-8 py-6 text-left font-semibold rounded-tr-2xl">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Data Rows */}
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-20 text-gray-500">
                      <div className="text-6xl mb-4">👨‍🏫</div>
                      No faculty records found
                    </td>
                  </tr>
                ) : (
                  data.map((fac: faculties) => (
                    <tr
                      key={fac.id}
                      className="group hover:bg-white/50 backdrop-blur-sm transition-all duration-300 border-b border-white/20 last:border-b-0 hover:shadow-lg hover:-translate-y-1"
                    >
                      <td className="px-8 py-6 font-mono text-blue-600 font-semibold group-hover:text-blue-700">
                        #{fac.id}
                      </td>
                      <td className="px-8 py-6 font-semibold text-gray-800 group-hover:text-gray-900">
                        {fac.name}
                      </td>
                      <td className="px-8 py-6 text-gray-600 group-hover:text-gray-800 max-w-md truncate">
                        {fac.email}
                      </td>
                      <td className="px-8 py-6">
                        <span className="inline-flex px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                          {fac.city}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <Link
                          href={`faculties/${fac.id}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:border-transparent"
                        >
                          <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2 mb-0.5">
                            👁️
                          </span>
                          View Details
                        </Link>
                      </td>
                      <td>
                        <Deletebtn id={fac.id} deleteFn={DeleteFaculty}/>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Stats Footer */}
          {data.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-blue-600">{data.length}</div>
                <div className="text-gray-600 font-medium">Total Faculty</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-emerald-600">
                  {data.filter(f => f.city === 'Rajkot').length}
                </div>
                <div className="text-gray-600 font-medium">Local Faculty</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-purple-600">
                  {new Set(data.map(f => f.city)).size}
                </div>
                <div className="text-gray-600 font-medium">Cities</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Faculties

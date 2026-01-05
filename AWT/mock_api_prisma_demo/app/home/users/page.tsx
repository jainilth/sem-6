import DeleteUser from '@/app/actions/delete/DeleteUser'
import { users } from '@/app/generated/prisma/browser'
import { prisma } from '@/app/lib/prisma'
import Deletebtn from '@/app/ui/Deletebtn'
import Link from 'next/link'
import React from 'react'

async function Users() {
  const data = await prisma.users.findMany()

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header with Add button */}
          <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
              <p className="text-gray-600 mt-1">Manage all registered users</p>
            </div>

            <Link
              href="users/add"  // <-- change this to your actual add-user route
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              + Add user
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-8 py-5 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((user: users) => (
                  <tr
                    key={user.id}
                    className="hover:bg-blue-50 hover:shadow-sm transition-all duration-200 group"
                  >
                    <td className="px-8 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{user.id}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-600 max-w-xs truncate">
                      {user.email}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        {user.city}
                      </span>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <Link
                          href={`users/${user.id}`}
                          className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 hover:text-blue-800 border border-blue-200 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-md whitespace-nowrap"
                        >
                          View
                        </Link>
                        <Deletebtn id={user.id} deleteFn={DeleteUser}/>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {data.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-500">Get started by creating your first user.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Users

import React from 'react'
import Student from '@/types/Student'
import { Linden_Hill } from 'next/font/google'
import Link from 'next/link'

const lindenHill = Linden_Hill({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-linden-hill'
})

export default async function Students() {
    let data = await fetch('https://6835982dcd78db2058c2552b.mockapi.io/student')
    let posts = await data.json()
    
    return (
        <div className={`${lindenHill.variable} font-sans min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 font-linden-hill">
                        Student Directory
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        View and manage student records with detailed profiles
                    </p>
                </div>

                {/* Table Card */}
                <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6 text-white">
                        <h2 className="text-2xl font-bold font-linden-hill tracking-tight">
                            All Students ({posts.length})
                        </h2>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                                        Enrollment
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                                        Joined
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-900 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {posts.map((fac: Student) => (
                                    <tr 
                                        key={fac.id}
                                        className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group"
                                    >
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-105 transition-transform">
                                                    <span className="text-xl font-bold text-white">
                                                        {fac.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                        {fac.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-mono font-semibold">
                                                {fac.enrollment}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600">
                                            <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded-lg">
                                                {new Date(fac.createdAt).toLocaleDateString('en-IN')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-right">
                                            <Link 
                                                href={`student/${fac.id}`}
                                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 transform"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-linden-hill">No students found</h3>
                        <p className="text-gray-600">Student records will appear here once added.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

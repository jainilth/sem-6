import SaveFaculty from "@/app/actions/save/SaveFaculty";
import React from "react";

export default function AddFaculty() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6" action={SaveFaculty}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add Faculty
        </h2>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter faculty name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter faculty email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="[email protected]"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter faculty phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="9876543210"
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter faculty city
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="New Delhi"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md text-sm transition-colors"
        >
          Save Faculty
        </button>
      </form>
    </div>
  );
}

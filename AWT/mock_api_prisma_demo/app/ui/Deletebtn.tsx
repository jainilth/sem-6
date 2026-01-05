'use client'
import React from 'react'
export default function Deletebtn(props: any) {
    return (
        <div>
            <button
                className="inline-flex justify-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors"
                onClick={() => {
                    props.deleteFn(props.id);
                }}
            >
                Delete
            </button>
        </div>
    )
}

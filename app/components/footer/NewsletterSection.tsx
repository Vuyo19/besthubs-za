'use client'
import React from 'react'

const NewsletterSection = () => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold text-white mt-3">
        Subscribe to our newsletter
      </h2>
      <p className="mt-4 text-xs leading-4 text-white">
        Nostrud amet eu ullamco nisi aute in ad minim nostrud
        adipisicing velit quis. Duis tempor incididunt dolore.
      </p>
      {/* Text Box and Subscribe Button */}
      <div className="mt-4 flex flex-col md:flex-row justify-center max-w-md mx-auto">
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full mt-2 md:mt-0 md:w-auto rounded-md border border-slate-gray bg-white px-3.5 py-2.5 h-12 text-gray-900 text-sm shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="mt-2 md:mt-0 ml-0 md:ml-2 w-full md:w-auto rounded-md bg-french-bistre border-2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default NewsletterSection
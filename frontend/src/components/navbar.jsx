import React from 'react'

const Navbar = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-12 px-12">
  <div className="flex min-h-[100px] items-center justify-center rounded-b-full bg-black shadow-lg sm:col-span-12">
    <ul className="flex gap-10 space-x-6 font-medium text-white">
      <li className="cursor-pointer hover:underline">Home</li>
      <li className="cursor-pointer hover:underline">About</li>
      <li className="cursor-pointer hover:underline">Contact</li>
    </ul>
  </div>
</div>

  )
}

export default Navbar
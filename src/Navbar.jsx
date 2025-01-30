import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class=" text-white py-3 px-4 flex items-center justify-between">
    <a class="font-bold text-xl tracking-tight" href="#">My Site</a>
    <div class="flex items-center">
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
    </div>
</nav>
    </div>
  )
}

export default Navbar
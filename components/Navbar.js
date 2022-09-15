import Image from "next/image"
function Navbar() {
  return (
    <>

      <nav className="flex items-center justify-between flex-wrap bg-gray-800 py-4 px-5">
        <Image className="" src="/judge.svg" width={50} height={50} />
        <p className="text-white text-lg">Advocate Shiv Nath Jha</p>
        <ul className="text-white">
          <li className="inline-block mr-4 text-md font-semibold cursor-pointer hover:border-b-2 border-white">Home</li>
          <li className="inline-block mr-4 text-md font-semibold cursor-pointer hover:border-b-2 border-white">About</li>
          <li className="inline-block mr-4 text-md font-semibold cursor-pointer hover:border-b-2 border-white">Contact</li>
          <li className="inline-block mr-4 text-md font-semibold cursor-pointer hover:border-b-2 border-white">More</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
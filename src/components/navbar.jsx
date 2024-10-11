import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="bg-[#121212]">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-white">MyMusic</h1>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
            <Link to="/" className="rounded-md bg-[#242424] px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link>
            <Link to="/trending" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Trending</Link>
            <Link to="/playlist" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Myplaylist</Link>
           
          </div>
        </div>
      </div>
    
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
   
      <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
      <Link to="/trending" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Trending</Link>
      <Link to="/playlist" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Playlist</Link>
      {/* <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</Link> */}
    </div>
  </div>
</nav>
  )
}

export default Navbar
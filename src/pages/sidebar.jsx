import { FaHome,FaMicrophone } from 'react-icons/fa';
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-[25%] p-2 h-full  flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
           <Link to="/"> <div className="flex  items-center gap-3 pl-8 cursor-pointer p-5">
                <FaHome size={20} color='white'></FaHome>
                <p className='text-white text-lg'>Home</p>
            </div></Link>
            <Link to="/playlist"><div className="flex items-center gap-3 pl-8 cursor-pointer p-5">
                <FaMicrophone size={20} color='white'></FaMicrophone>
                <p className='text-white text-lg'>MyPlayList</p>
            </div></Link>
        </div>
        <div className=" h-[85%] rounded ">
        <div className='p-4 flex items-center justify-between'>
               <div className='flex items-center gap-3'>
                    <p className='text-lg'>Your Library</p>

                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded'>
                <h1>All top trending songs are available here</h1>
                <p className='font-light'>India's top songs</p>
                <Link to="/trending"><button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Trending songs</button></Link>

            </div>
            <div className='p-4 bg-[#242424] m-2 rounded'>
                <h1>Listen your favauroite songs</h1>
                <p className='font-light'>saved in your playlist</p>
                <Link to="/playlist"><button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>My playlist</button></Link>

            </div>
        
            
        </div>
      
    </div>
  )
}

export default Sidebar
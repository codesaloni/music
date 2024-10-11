import { useState } from "react";
import Player from "../components/footer";
import Navbar from "../components/navbar";
import Sidebar from "./sidebar";
import { songs } from '../assets/assets';

function Home() {
  const [selectedSong, setSelectedSong] = useState(songs[0]); // Default to first song
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the song is playing

  // Function to handle song selection and toggle play/pause
  const handleSongClick = (song) => {
    if (selectedSong?.songUrl === song.songUrl) {
      // If the same song is clicked, toggle play/pause
      setIsPlaying(!isPlaying); // Toggle play/pause
    } else {
      // If a new song is selected, set it and start playing
      setSelectedSong(song);
      setIsPlaying(true); // Start playing the new song
    }
  };
  
   // Function to handle playing the next song
   const handleNextSong = () => {
    const currentIndex = songs.findIndex((song) => song.songUrl === selectedSong.songUrl);
    const nextIndex = (currentIndex + 1) % songs.length; // Move to the next song
    setSelectedSong(songs[nextIndex]);
    setIsPlaying(true); // Play the next song
  };

  // Function to handle playing the previous song
  const handlePrevSong = () => {
    const currentIndex = songs.findIndex((song) => song.songUrl === selectedSong.songUrl);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length; // Move to the previous song
    setSelectedSong(songs[prevIndex]);
    setIsPlaying(true); // Play the previous song
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="h-[80%] min-h-[80vh] flex flex-col md:flex-row">
        <Sidebar />

        {/* Adjust grid container and make sure background colors are visible */}
        <div className="flex-1 w-full px-4">
        <p className='text-white mt-2 text-lg'>All Songs</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
            {songs.map((song) => (
              <div
                key={song.id}
                className="song-card bg-[#121212]  p-2 rounded-lg text-center"
                onClick={() => handleSongClick(song)}  // Select song and toggle play/pause
              >
                <img src={song.cover} className="h-44 w-full object-cover" alt="Cover art" />
                <p className="text-white text-center">{song.title}</p>
                <p className="text-gray-400 text-center">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pass the selected song and play state to the player */}
      <Player
        songUrl={selectedSong?.songUrl}
        songName={selectedSong?.title}
        cover={selectedSong?.cover}
        artistName={selectedSong?.artist}
        isPlaying={isPlaying} // Control play/pause in the Player component
        setIsPlaying={setIsPlaying} // Allow Player to toggle play/pause state
        onNext={handleNextSong}  // Handle next song button
        onPrev={handlePrevSong}  // Handle previous song button
      />
    </div>
  );
}

export default Home;


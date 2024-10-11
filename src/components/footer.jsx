import { useRef, useEffect, useState } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';

function Player({ songUrl, songName, artistName, cover, isPlaying, setIsPlaying,onNext, onPrev }) {
  const audioRef = useRef(null); // Reference to the audio element
  const [currentTime, setCurrentTime] = useState(0); // Track current time of the song
  const [duration, setDuration] = useState(0); // Track song duration
  const [progress, setProgress] = useState(0); // Track progress as percentage
  const [volume, setVolume] = useState(0.5); // Track volume (default at 50%)

  // Play or pause the song when isPlaying changes
  useEffect(() => {
    if (isPlaying && songUrl) {
      audioRef.current.play();  // Play the audio
    } else {
      audioRef.current.pause(); // Pause the audio
    }
  }, [isPlaying, songUrl]); // Trigger whenever isPlaying or songUrl changes

  // Update the current time and progress as the song plays
  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setCurrentTime(current);
    setDuration(duration);
    setProgress((current / duration) * 100);
  };

  // Handle seeking when clicking on the progress bar
  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
    audioRef.current.currentTime = seekTime; // Set the new current time of the song
    setCurrentTime(seekTime); // Update the current time
  };

  // Function to toggle play/pause manually
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying); // Toggle the isPlaying state
  };

  // Function to update the volume of the audio element
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume); // Update state for the volume
    audioRef.current.volume = newVolume; // Update the audio element's volume
  };

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className=" bg-black   flex flex-col md:flex-row justify-between items-center text-white py-2 px-2 md:px-4">
      {/* Display the current song cover art */}
      <div className="hidden md:flex items-center gap-4">
        <img className="w-10 h-10 rounded-lg object-cover" src={cover} alt="cover art" /> {/* Show the cover image */}
        <div>
        <p className="text-[10px] whitespace-nowrap overflow-hidden text-ellipsis">
      {songName.slice(0, 12) || 'No song selected'}
    </p>
    <p className="text-[8px] text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
      {artistName.slice(0, 12) || 'Unknown artist'}
    </p>
          
        </div>
      </div>
      
      {/* Play controls */}
      <div className="flex flex-col items-center gap-1 w-full md:m-auto">
        <div className="flex justify-center gap-4">
          <button onClick={onPrev}><FaStepBackward /></button>
          {/* Play or Pause button */}
          <button onClick={togglePlayPause}>
            {isPlaying ? <FaPause color="white" /> : <FaPlay color="white" />}
          </button>
          <button onClick={onNext}><FaStepForward /></button>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <p className="text-sm">{formatTime(currentTime)}</p>
          <div
            className="w-[60vh] max-w-[500px] bg-gray-100 rounded-full cursor-pointer"
            onClick={handleSeek}  // Handle click to seek in the song
          >
            <div
              className="h-1 bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}  // Set width based on progress
            ></div>
          </div>
          <p>{formatTime(duration)}</p>
        </div>
      </div>

      {/* Volume control */}
      <div className="items-center gap-2 hidden lg:flex">
        <FaVolumeUp  color='white'/>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"  // Volume range from 0 (muted) to 1 (full)
          value={volume}
          onChange={handleVolumeChange}  // Update volume on change
          className="w-24"
        />
      </div>

      {/* Audio element for the song */}
      <audio
        ref={audioRef}
        src={songUrl}
        onTimeUpdate={handleTimeUpdate}  // Update time and progress as the song plays
      />
    </div>
  );
}

export default Player;

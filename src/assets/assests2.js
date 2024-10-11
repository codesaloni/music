import song5 from '../assets/song5.mp3';  // Correct path to the audio file
import img5 from '../assets/img5.jpg'
import song12 from '../assets/song12.mp3'
import img12 from '../assets/img12.jpg'
import img10 from '../assets/img10.jpg'
import song10 from '../assets/song10.mp3'
import song6 from '../assets/song6.mp3'
import img6 from '../assets/img6.jpg'
import song8 from '../assets/song8.mp3'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import song9 from '../assets/song9.mp3'

export const songs = [
  {
    id: 1,
    title: 'Chaleya',
    artist: 'Arijit Singh',
    album: 'jawan',
    cover: img5, // Ensure this path is correct in your public folder
    songUrl: song5,  // Imported audio file path
  },
  // Add more songs if needed
  {
    id: 2,
    title: 'OOPS',
    artist: 'king',
    album: 'Album 1',
    cover: img12, // Ensure this path is correct in your public folder
    songUrl: song12,  // Imported audio file path
  },
  {
    id: 3,
    title: 'Khoobsurat',
    artist: 'Sachin jigar,vishal mishra',
    album: 'stree 2',
    cover: img10, // Ensure this path is correct in your public folder
    songUrl: song10,  // Imported audio file path
  },
  {
    id: 4,
    title: 'Nadaaniyan',
    artist: 'Akshath,',
    album: 'Album 1',
    cover: img6, // Ensure this path is correct in your public folder
    songUrl: song6,  // Imported audio file path
  },
  {
    id: 5,
    title: 'Yimmy Yimmy',
    artist: 'Sherya ghoshal,Tayc',
    album: 'Stree 2',
    cover: img8, // Ensure this path is correct in your public folder
    songUrl: song8,  // Imported audio file path
  },
  {
    id: 6,
    title: 'Jaane Jannae',
    artist: 'Arjun',
    album: 'Album 12',
    cover: img9, // Ensure this path is correct in your public folder
    songUrl: song9,  // Imported audio file path
  },


];

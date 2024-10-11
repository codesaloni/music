import song1 from '../assets/song1.mp3';  // Correct path to the audio file
import img1 from '../assets/img1.jpg'
import song3 from '../assets/song3.mp3'
import img3 from '../assets/img3.jpg'
import img7 from '../assets/img7.jpg'
import song7 from '../assets/song7.mp3'
import song13 from '../assets/song13.mp3'
import img13 from '../assets/img13.jpg'
import song14 from '../assets/song14.mp3'
import img14 from '../assets/img14.jpg'
import img4 from '../assets/img4.jpg'
import song4 from '../assets/song4.mp3'

export const songs = [
  {
    id: 1,
    title: 'Aadha Ishq',
    artist: 'Sherya Ghoshal',
    album: 'Album 1',
    cover: img1, // Ensure this path is correct in your public folder
    songUrl: song1,  // Imported audio file path
  },
  // Add more songs if needed
  {
    id: 2,
    title: 'Aayi Nahi',
    artist: 'Sachin Jigar,Pawan Singh,Divya Kumar',
    album: 'Album 1',
    cover: img3, // Ensure this path is correct in your public folder
    songUrl: song3,  // Imported audio file path
  },
  {
    id: 3,
    title: 'Ve Kamleya',
    artist: 'Arijit Singh',
    album: 'rockey rani prem kahani',
    cover: img7, // Ensure this path is correct in your public folder
    songUrl: song7,  // Imported audio file path
  },
  {
    id: 4,
    title: 'Senorita',
    artist: 'Farhan Akhtar,Hrithik Roshan,Mar Fernandaz,',
    album: 'Zindagi Na milegi dobara',
    cover: img13, // Ensure this path is correct in your public folder
    songUrl: song13,  // Imported audio file path
  },
  {
    id: 5,
    title: 'Tumhare he rehenge',
    artist: 'Sachin Jigar,Shilpa Rao,Varun Jain,',
    album: 'Stree 2',
    cover: img14, // Ensure this path is correct in your public folder
    songUrl: song14,  // Imported audio file path
  },
  {
    id: 6,
    title: 'Admirin You',
    artist: 'Karan Aujla,',
    album: 'Album',
    cover: img4, // Ensure this path is correct in your public folder
    songUrl: song4,  // Imported audio file path
  },
  


];


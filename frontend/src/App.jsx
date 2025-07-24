import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './components/SearcBar'
import { HeroSection } from './components/HeroSection'
import axios from 'axios'



function App() {
  
   const [allWords, setAllWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((res) => setAllWords(res.data))
      .catch((err) => console.error(err));
  }, 500);

  const filteredWords = allWords.filter(word =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) 
    
  );

  return (
    
   <div className="bg-white min-h-screen">
    <div>
      <p className='text-3xl font-bold text-center py-10'>
        Gen Z Dictionary
      </p>
    </div>
  
  <div className="flex items-center justify-center  py-20">
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </div>
  <div>
    <HeroSection words={filteredWords} />
  </div>
</div>


  )
}

export default App

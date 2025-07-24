import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './components/SearcBar'
import { HeroSection } from './components/HeroSection'
import axios from 'axios'
import { BookOpen } from 'lucide-react'
import  Iridescence  from './components/Iridescence'




function App() {
  
   const [allWords, setAllWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((res) => setAllWords(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredWords = allWords.filter(word =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) 
    
  );

  return (
    
   <div className=" relative  min-h-screen">
    
       <div className="absolute inset-0 -z-10">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
    
    <div>
      <div className="flex items-center py-10 justify-center gap-3 mb-4">
            <BookOpen className="h-7 w-7 mt-2 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              Dictionary
            </h1>
          </div>
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

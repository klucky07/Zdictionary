import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './components/SearcBar'
import { HeroSection } from './components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    
   <div className="bg-white min-h-screen">
    <div>
      <p className='text-3xl font-bold text-center py-10'>
        Gen Z Dictionary
      </p>
    </div>
  
  <div className="flex items-center justify-center  py-20">
    <SearchBar />
    
   
  </div>
  <div>
    <HeroSection />
  </div>
</div>


  )
}

export default App

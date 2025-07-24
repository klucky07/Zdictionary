import React, { useState } from 'react';
import axios from 'axios';  
import { FloatingCard } from './FloatingCard';
export const NewAddword = () =>{
    const[onClick, setOnClick] = useState(false);
    const handleClick = () => {
        setOnClick(!onClick);
    }

    return(
      <div className="flex relative  justify-center items-center gap-4 ">
  <button onClick={handleClick} className="bg-green-100 text-green-800 font-semibold px-6 py-2 rounded-xl shadow hover:bg-green-200 transition duration-300 ease-in-out">
    Add new word +
  </button>
  {onClick && (
    <div className='absolute top-15 z-10'>
<FloatingCard/>
    </div>
        
      )}
</div>

    )
}
import  { useState, useEffect } from 'react';
import axios from 'axios';  
export const HeroSection = () => {  
    const [words, setWords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((res) => setWords(res.data))
      .catch((err) => console.error(err));
  }, []);
return (
    <div className="p-6 max-w-4xl h-[500px] overflow-y-auto mx-auto">
 
  <div className="grid  gap-6">
    {words.map((word) => (
      <div
        key={word._id}
        className="bg-white grid grid-cols-2 rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
      >
        <h3 className="text-xl font-bold text-indigo-600 mb-2 capitalize">{word.word}</h3>
        <p className="text-gray-700 text-base left-2 border-l-4 border-indigo-500 pl-2">{word.meaning}</p>
      </div>
    ))}
  </div>
</div>

)
}
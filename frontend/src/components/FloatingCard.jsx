import  { use, useState } from 'react';
import axios from 'axios';
export const FloatingCard = () => {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    
    const handleAddWord = async () => {
   

    try {
      const response = await axios.put('http://localhost:3000/data', {
        word,
        meaning,
      });

    
      setWord('');
      setMeaning('');
    } catch (error) {
      alert('error in adding word');
    }
  };
  

    return (
        <div className="w-2/3 max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-2 space-y-1">
  

  <div className="flex flex-col space-y-1">
    <label className="text-gray-600 font-semibold" htmlFor="word">Word</label>
    <input
      onChange={(e) => setWord(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
      type="text"
      id="word"
      placeholder="Enter word"
    />
  </div>

  <div className="flex flex-col space-y-1">
    <label className="text-gray-600 font-semibold" htmlFor="meaning">Meaning</label>
    <input
      onChange={(e) => setMeaning(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
      type="text"
      id="meaning"
      placeholder="Enter meaning"
    />
  </div>

  <div className="flex justify-center pt-2">
    <button
      onClick={handleAddWord}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
    >
      Add Word
    </button>
  </div>
</div>

    )
}
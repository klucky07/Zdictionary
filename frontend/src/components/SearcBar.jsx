import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewAddword } from './NewAddword';
export const SearchBar = ({searchTerm,setSearchTerm}) => {
  
  return (
  <div className="absolute flex flex-col  items-center  justify-center gap-6   w-full px-4">
  
  <div className="relative w-full max-w-md">
    
    <i className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </i>

   
    <input
    onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="Search..."
      className="w-full pl-10 pr-4 py-3 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
    <div className=' '>
        <NewAddword />
    </div>
</div>

  );
}
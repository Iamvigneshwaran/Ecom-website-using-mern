import React, { useState } from 'react';

const Navbar = ({ username }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic with the searchQuery
    console.log('Search query:', searchQuery);
    // Reset the search input field
    setSearchQuery('');
  };

  return (
    <div className="bg-blue-400 py-4 px-8 flex justify-between items-center">
      <h1 className="text-white text-2xl font-serif">VICKYEMART</h1>
      <div className="flex items-center">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="mr-2 p-2 rounded"
          />
          <button type="submit" className="px-4 py-2 bg-white text-blue-400 rounded">
            Search
          </button>
        </form>
        <div className="text-white text-md font-serif ml-4">{username}</div>
      </div>
    </div>
  );
};

export default Navbar;

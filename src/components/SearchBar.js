import React from 'react';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <div>
      <input
        aria-label="Search"
        className=""
        type="search"
        placeholder="Type something here ..."
      />
    </div>
  );
}

export default SearchBar;

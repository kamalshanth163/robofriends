
import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='input pa1'>
      <input
        className='pa3' 
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
      />
    </div>
    
  );
}

export default SearchBox;
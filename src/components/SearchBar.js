import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    onTermSubmit(term);    
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>Search For a Video</label>
          <input 
            type="text" 
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
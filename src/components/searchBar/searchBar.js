import React from 'react';
import './searchBar.css';

const Searchbar = props => {
  const onEnter = e => e.key === 'Enter' && props.onKeyPressSearch();


  return (
    <div className="ui category search searchbar-wrapper">
      <input ref={props.searchInput} onKeyPress={onEnter} type="text" placeholder="Search email..." />
    </div>
  );
}

export default Searchbar;
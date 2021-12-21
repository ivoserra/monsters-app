import React from 'react';

import './search-box.styles.css';

// functional components dont have access to state, since state is a class component and not to life cycle methods and internal state
// we dont add state to SearchBox is because other card component needs the state .
export const SearchBox = ({ placeholder, handleChange}) =>(
    <input 
    className="search" 
    type="search" 
    placeholder={placeholder} 
    onChange= {handleChange} />
);
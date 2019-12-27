import React from 'react';
import './searchBox.style.css'



 const SearchBox =({handleChange, text, placeholder}) =>{


       return(
           <input
               className={'search'}
               type="search"
               value={text}
               name=""
               onChange={handleChange}
               placeholder={placeholder}
           />)

}


export default SearchBox;
import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react';


function Navbar() {
const [userInput, setUserInput] = useState();
const [movies, setMovies] = useState();

useEffect(() =>{
    fetch(`http://localhost:8080/movies/${userInput}`)
    .then(res => res.json())
    .then(data => setMovies(data))
})

const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value)
}

if (userInput.length > 0){
    movies.filter((movie) => {
        return movie.title.match(userInput)
    })
}

  return (
    <div className='navBar'>
        <div className='searchBar'>
            <input type='input' placeholder='Search' onChange={handleChange} value={userInput} />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Navbar
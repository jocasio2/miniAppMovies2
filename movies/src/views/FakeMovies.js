import React from 'react'
import './FakeMovies.css'
import { useState, useEffect, useContext } from 'react';

function FakeMovies() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  return (
    <div>
        {movies?.map((movie, i)=>{
            return (
            <div key={i} className='moviesDisplay'>
                <p>Title:{' ' + movie.title} Author:{' ' + movie.author}  </p>
                <p>Author:{' ' + movie.author}  </p>
            </div>
            )
        })}
    </div>
  )
}

export default FakeMovies
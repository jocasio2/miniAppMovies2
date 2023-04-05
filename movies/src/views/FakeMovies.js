import React from 'react'
import './FakeMovies.css'
import { createContext } from 'react';
import {MoviesContext}  from '../App';



function FakeMovies() {

  const {movies} = React.useContext(MoviesContext);

  console.log('fake movies', movies)
    
  return (
      <div>
          {movies?.map((movie, i)=>{
              return (
              <div key={i} className='moviesDisplay'>
                  <p>Title:{' ' + movie.title}  </p>
                  <p>Author:{' ' + movie.author}  </p>
              </div>
              )
          })}
      </div>
   
  )
}

export default FakeMovies
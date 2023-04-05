import React from 'react'
import { useState, useEffect, useContext } from 'react';
import {MoviesContext}  from '../App';

function Search() {
const [userInput, setUserInput] = useState();
const [movieData, setMovieData] = useState();

const {movies} = React.useContext(MoviesContext);

console.log('search string', movies)

const movieSearch = (userInput) => {
    setMovieData(movies.filter((movie)=>{
        return movie.title.toLowerCase().includes(userInput.toLowerCase())
    }))
}
console.log(movieData)
  return (
    <>
        <form onSubmit={(e) => {e.preventDefault(); movieSearch(e.target[0].value)}}>
            <input type="text" placeholder="Search by title" />
            <input type="submit" placeholder="Submit"/>
        </form>
        <div >
            {movieData?.map((movie, i) => {
                return(
                    <>
                        <p key={i}>{movie.title}</p>
                        <p>{movie.author}</p>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Search
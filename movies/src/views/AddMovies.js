import React from 'react'
import { useState, useEffect, useContext } from 'react';
import {MoviesContext}  from '../App';


function AddMovies() {
const [title, setTitle]=useState('')
const [author, setAuthor]=useState('')
const [movieList, setMovieList] = useState();

const {movies, setMovies} = React.useContext(MoviesContext);

   const handlePost = (e) => {
        //e.preventDefault();
         
        fetch('http://localhost:8080/movies', {
          method: "POST",
          body: JSON.stringify({
            title:title,
            author:author
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(()=> 
            fetch('http://localhost:8080/movies')
                .then(res => res.json())
                .then(data => setMovies(data))
            )
        }

//   useEffect(() => {
    
//   }, [movieList])

  


  return (
    <>
        <div>
            <h4>Enter Movie to input:</h4>
            <form onSubmit={(e) => {e.preventDefault(); handlePost(); setMovieList()}}>
                <input type="text" placeholder="Enter Movie Name" onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Enter Director" onChange={(e) => setAuthor(e.target.value)}/>
                <input type="submit" placeholder="Submit"/>
            </form>
        </div>
        <div>
        <h4>Update a movie:</h4>
        <form onSubmit={(e) => {e.preventDefault(); handlePost(); setMovieList()}}>
            <input type="text" placeholder="Enter Movie Name" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Enter Director" onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" placeholder="Submit"/>
        </form>
    </div>
    </>
  )
}

export default AddMovies
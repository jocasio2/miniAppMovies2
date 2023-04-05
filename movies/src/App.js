import './App.css';
import React from 'react';
import FakeMovies from './views/FakeMovies';
import Navbar from './views/Navbar';
import Search from './views/Search';
import { useState, useEffect, useContext } from 'react';
import AddMovies from './views/AddMovies';
// import  createContext  from 'react';


export const MoviesContext = React.createContext();

function App() {
  const [movies, setMovies] = useState();
  

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])
  console.log("app movies", movies)

  return (
    <MoviesContext.Provider value={{movies, setMovies}}>
      <div className="App">
        <Navbar/>
        <Search/>
        <FakeMovies/>
        <AddMovies/>
      </div>
     </MoviesContext.Provider>
  );
}

export default App;

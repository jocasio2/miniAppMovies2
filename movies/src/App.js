import './App.css';
import React from 'react';
import FakeMovies from './views/FakeMovies';
import Navbar from './views/Navbar';



function App() {

  return (
    <div className="App">
      <Navbar/>
      <FakeMovies/>
    </div>
  );
}

export default App;

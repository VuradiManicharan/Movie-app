import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./Components/MovieList.jsx";

function App() {

  const [movies, setMovies] = useState([
  {
  "Title": "RRR",
  "Year": "2022",
  "imdbID": "tt8178634",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
},
{
  "Title": "Narcos",
  "Year": "2015–2017",
  "imdbID": "tt2707408",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
},
{
  "Title": "Orange",
  "Year": "2010",
  "imdbID": "tt1533748",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2ZkZGIwZDAtNGU1ZS00NTlkLThjYjYtMjU5MzQzNDQyMTBmXkEyXkFqcGdeQXVyODA2ODM3NDQ@._V1_SX300.jpg"
},
{
  "Title": "Vikram",
  "Year": "2022",
  "imdbID": "tt9179430",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Galactic Battlegrounds",
  "Year": "2001",
  "imdbID": "tt0292254",
  "Type": "game",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ4MTIyNjctMmY5OC00ZDgyLWI1ZDgtMDFhMmIwY2UzYjUwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
},
  ]);
    
    return (
    <div className="container-fluid movie-app">
      <div className="row">
          <MovieList 
          movies={movies}
          />
      </div>
      
    </div>
  );
}

export default App;

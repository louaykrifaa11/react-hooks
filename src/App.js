import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import Movieslist from './Movieslist';
import MovieCard from './MovieCard';
import AddMovies from './AddMovies';
import Filter from './Filter';


function App() {

const [SearchNote,setSearchNote]=useState(0)
const [nameSearch,setNameSearch]=useState("")
const [Movies,setMovies]=useState([{
  name:"Hello lovies",
  note:4,
  description:"Hello Lovelies! is a joyous, irreverent debut about friendship, motherhood, and what it takes to survive and thrive in today's digital world.",
  posterURL:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219622/Hello_Love_Goodbye_255x382.jpg",
  },
  {
  name:"the last of us",
  note:2,
  description:"An aspiring playwright in New York strikes up a friendship with a guy while on the rebound from a break-up. female protagonist ...",
  posterURL:"https://i.redd.it/i-am-a-graphic-designer-specializing-in-movie-posters-and-v0-c686txicxrbb1.jpg?width=2048&format=pjpg&auto=webp&s=e5a6154f32ca133235fb518713c88342de3ea958",
  },
]
)

  return (
  <div className="App">
    <Filter setNameSearch={setNameSearch} SearchNote={SearchNote} setSearchNote={setSearchNote} nameSearch={nameSearch} />
    <AddMovies setMovies={setMovies} movies={Movies}/>
    <Movieslist movies={Movies.filter(movie=>movie.name.toUpperCase().trim().includes(nameSearch.toUpperCase().trim())&& movie.note>=SearchNote)}/>
    
  </div>

 
);
}
export default App;



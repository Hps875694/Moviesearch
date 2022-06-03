import axios from 'axios'
import { useState } from 'react';
import './App.css';

function App() {

  const [movie , setMovie] = useState("")

const [data , setData] = useState([])
  const fetchMovie = (e) =>{
  
    setMovie(e.target.value)
  }
const getMovie=(e)=>{
  e.preventDefault();

  axios.get(`https://www.omdbapi.com/?s=${movie}&apikey=52e1ccd6`)
  .then((response)=>{
    console.log(response)
  setData(response.data.Search)
  })
}

  return (
   <>
   <div className='header'>
     <h1>
       Movie Search App
     </h1>
   </div>
   <form onSubmit={getMovie}>
   <div className='Search'>
   <input type="text" placeholder='Search Movie' value={movie} onChange={fetchMovie} />
   <button>Search</button>
   </div>
   </form>
  
<div>
  {
    data.map((value , index)=>{
      return (
        <div>
<img src={value.Poster} alt="movie" />
<div>
<h1>{value.Year}</h1>
<h4>{value.Title}</h4>
</div>
          </div>

      )
    })
  }
</div>


   </>
  );
}

export default App;

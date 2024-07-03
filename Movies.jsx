 import ResponseMovies from '../mocks/with-results.json'

  export  function ListOfMovies () {
        return (
         <ul>
          {
            movie.map(movie => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title}/>
      
              </li>
            ))
          }
        </ul>)
    }

      
  export function renderNoMovies () {
       <p>no hay de eso</p>
    }
    
export function Movies () {
    const movie = ResponseMovies.Search
    const hasMovies = movie?.length > 0

    return (
            hasMovies
            ? <Movies movie={movie}/>
            : <ResponseMovies/>  
    )
}

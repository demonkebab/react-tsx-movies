import React from 'react'

type Movie = {
    Poster:string,
    Title:string,
    Type:string,
    Year:string,
    imdbID:string
  }

const MovieCard:React.FC<Movie> = ({Poster, Title, Type, Year, imdbID}) => {
  return (
    <>
    <div className='movie'>
          <div>
            <p>{Year}</p>
          </div>

          <div>
            <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
          </div>

          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
    </div>
    </>
  )
}

export default MovieCard
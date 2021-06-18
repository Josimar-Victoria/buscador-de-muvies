import movies from '../movies.json'
import style from '../css/MoviesGrid.module.css'
import {MoviesCard} from '../components/MoviesCard'
export function MoviesGrid() {
    return (
        <ul className={style.moviesGrid}>
            {movies.map(movie => (
                <MoviesCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}
import style from '../css/MoviesCard.module.css'
import { Link } from 'react-router-dom';
export function MoviesCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={style.movieCard}>
            <Link to={'/movies/' + movie.id}>
                <img
                    width={230}
                    height={345}
                    src={imageUrl}
                    className={style.movieImage}
                    alt={movie.title}
                />
                <h3>{movie.title}</h3>
            </Link>
        </li>


    )
}
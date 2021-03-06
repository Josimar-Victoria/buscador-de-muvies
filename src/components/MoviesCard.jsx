import style from "../css/MoviesCard.module.css";
import { Link } from "react-router-dom";
import getMoviesImg from "../util/getMoviesImg";

export function MoviesCard({ movie }) {
    const imageUrl = getMoviesImg(movie.poster_path, 300) 

  return (
    <li className={style.movieCard}>
      <Link to={`/movies/${movie.id}`}>
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
  );
}

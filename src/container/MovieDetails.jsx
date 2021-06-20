
import style from '../css/MovieDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../util/htppClien';
import { Spinner } from '../components/Spinner'

export function MovieDetails() {
    const [movie, setMovie] = useState(null)
    const [isloading, setIsloading] = useState(true)
    const { movieId } = useParams();

    useEffect(() => {
        setIsloading(true);
        get("/movie/" + movieId).then(data => {
            setMovie(data)
            setIsloading(false)
        })
    }, [movieId])

    if(isloading){
        return (
            <Spinner/>
        )
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={style.datailsContainer}>
            <img className={style.col + " " + style.movieImage} src={imageUrl} alt={movie.title} />
            <div className={style.col + " " + style.movieDetails} >
                <p className={style.firstItem}><strong>Title:</strong> {movie.title}</p>
                <p>
                    <strong>Generos:</strong> {movie.genres.map(genre => genre.name).join(" ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    )
}
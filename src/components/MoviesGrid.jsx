import { useEffect, useState } from 'react'
import style from '../css/MoviesGrid.module.css'
import { MoviesCard } from '../components/MoviesCard'
import { get } from '../util/htppClien'
import { Spinner } from './Spinner'
import {useQuery} from '../hook/useQuery'


export function MoviesGrid() {
    const [movies, SetMovies] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const query = useQuery()
    const search = query.get("search")
    console.log(search);

    useEffect(() => {
        setisLoading(true)
        const searchUrl = search 
        ? "/search/movie?query=" + search 
        : "/discover/movie"
        get(searchUrl)
            .then(data => {
                SetMovies(data.results)
                setisLoading(false)
            })
    }, [search])

    if (isLoading) {
        return <Spinner />
    }
    return (
        <ul className={style.moviesGrid}>
            {movies.map(movie => (
                <MoviesCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}
import { useEffect, useState } from "react";
import style from "../css/MoviesGrid.module.css";
import { MoviesCard } from "../components/MoviesCard";
import { get } from "../util/htppClien";
import { Spinner } from "./Spinner";
import { useQuery } from "../hook/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";

export function MoviesGrid({search}) {
  const [movies, SetMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [ hasMore, setHasMore] = useState(true)


  useEffect(() => {
    setisLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      SetMovies((prevMovie) => prevMovie.concat(data.results))
      setHasMore(data.page < data.total_pages)
      setisLoading(false);
    });
  }, [search, page]);

if(!isLoading && movies.length === 0) {
    return <Empty/>
}
  return (
    <InfiniteScroll 
    dataLength={movies.length} 
    hasMore={hasMore}
    loader={<Spinner />} 
    next={() => setPage((prvPage) => prvPage + 1)}>
      <ul className={style.moviesGrid}>
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

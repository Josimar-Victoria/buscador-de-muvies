
import placeholder from "../placeholder.png";
export default function getMoviesImg( path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` :placeholder
}

import { MoviesGrid } from "../components/MoviesGrid";
import Search from "../components/Search";
import { useQuery } from "../hook/useQuery";
import useDebounce from "../hook/usuDEbounce";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce( search, 300)
    return (
        <div>
            <Search/>
            <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
        
    )
}
import style from '../css/Search.module.css'
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '../hook/useQuery'

export default function Search() {
    const query = useQuery()
    const search = query.get("search")
    const [searchText, setsearchText] = useState("")
    const history = useHistory()

    useEffect(() => {
        setsearchText(search || "")
    }, [search])

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push("/?search=" + searchText)
    }

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input className={style.searchInput}
                    value={searchText}
                    onChange={(e) => setsearchText(e.target.value)}
                    placeholder='Search Movie'
                    type="text"
                />
                <button className={style.searchButton} type='submit'>
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}

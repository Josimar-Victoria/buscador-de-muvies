import { FaSpinner } from 'react-icons/fa';
import style from '../css/Spinner.module.css'
export function Spinner() {
    return (
        <div className={style.spinner}>
           <FaSpinner className={style.spinning} size={60}/>
        </div>
    )
}


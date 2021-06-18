import '../App.css'
import style from '../css/App.module.css'
import {MoviesGrid} from '../components/MoviesGrid'
function App() {
  return (
    <div className="">
      <header className="">
         <h1 className={style.title}>MOVIE</h1>
      </header>
      <main>
        <MoviesGrid/>
      </main>
    </div>
  );
}

export default App;

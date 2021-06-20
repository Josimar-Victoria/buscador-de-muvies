import style from '../css/App.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from '../container/MovieDetails';
import { LandingPage } from '../container/LandingPage';
function App() {
  return (
    <Router className="">
      <header className="">
        <Link to='/'><h1 className={style.title}>MOVIE</h1></Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

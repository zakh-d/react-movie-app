import React from 'react';
import PopularMovieContainer from "./components/Movies/PopularMovieContainer";
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router";
import FavoriteMovieContainer from "./components/Movies/FavoriteMovieContainer";

const App = () => {
  return (
      <div>
        <NavBar/>
          <Route path={"/"} component={PopularMovieContainer} exact={true}/>
          <Route path={"/favorite"} component={FavoriteMovieContainer}/>
      </div>
  );
}

export default App;

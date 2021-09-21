import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import React, { createContext, useCallback, useState } from "react";
import CocktailSearch from "./Components/CocktailSearch";
import CocktailDatails from "./Components/CocktailDatails";
import Main from "./Components/Main";
import SearchIngredient from "./Components/SearchIngredient";

export const Context = createContext();

function App() {
  const [loading, setLoading] = useState(false);

  const getData = useCallback((param, stateSetter) => {
    setLoading(true);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${param.name}=${param.value}&key=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        stateSetter(data.drinks || data.ingredients);
        setLoading(false);
      });
  }, []);
  return (
    <Router>
      <Context.Provider value={{ getData }}>
        <div className="App row centered">
          <header>
            <Link to="/">Main</Link>
            <Link to="/cocktailSearch">Search</Link>
            <Link to="/searchIngridient">Ingridient</Link>
          </header>
          {loading && <h1>Loading</h1>}
        </div>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/cocktailSearch">
            <CocktailSearch />
          </Route>
          <Route path="/searchIngridient">
            <SearchIngredient />
          </Route>
          <Route path="/cocktailDetails/:id">
            <CocktailDatails />
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;

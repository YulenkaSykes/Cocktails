import React, { useState, useContext } from "react";
import Card from "./Card";
import { Context } from "../App";

const CocktailSearch = () => {
  const { getData } = useContext(Context);

  const [request, setReqest] = useState("");
  const [cocktailsArrey, setCocktailsArrey] = useState([]);

  return (
    <div className="col container">
      <h1>Cocktail</h1>
      <div className="row centered">
        <input
          type="text"
          onChange={(e) => setReqest(e.target.value)}
          value={request}
        />
        <button
          onClick={() => {
            setReqest("");
            getData({ name: "s", value: request }, setCocktailsArrey);
          }}
        >
          Search
        </button>
      </div>

      <div className="wrapper row centered">
        {cocktailsArrey?.length > 0 &&
          cocktailsArrey?.map((item) => <Card drink={item} />)}
      </div>
    </div>
  );
};
export default CocktailSearch;

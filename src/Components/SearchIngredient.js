import React, { useState, useContext } from "react";
import { Context } from "../App";
import Card from "./Card";

const SearchIngredient = () => {
  const { getData } = useContext(Context);
  const [request, setReqest] = useState("");
  const [cocktails, setCocktails] = useState([]);

  return (
    <div className="container">
      <h1>Ingredient</h1>
      <div className="row centered container">
        <input
          type="text"
          value={request}
          onChange={(e) => setReqest(e.target.value)}
        />
        <button
          onClick={() => {
            setReqest("");
            getData({ name: "i", value: request }, setCocktails);
          }}
        >
          Search
        </button>
      </div>
      <div className="row centered">
        {cocktails?.length > 0 &&
          cocktails.map((item) => <Card ingredient={item} />)}
      </div>
    </div>
  );
};

export default SearchIngredient;

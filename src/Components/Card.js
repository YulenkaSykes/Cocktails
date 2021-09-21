import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ drink, ingredient, isFull }) => {
  const [showIngrediends, setShowIngrediends] = useState();
  if (drink) {
    const {
      strDrink,
      strCategory,
      strDrinkThumb,
      strInstructions,
      idDrink,
    } = drink;
    const ingredients = Object.keys(drink)
      .filter((key) => key.includes("strIngredient") && drink[key])
      .map((item) => drink[item]);
    console.log(ingredients);

    return (
      <div className={`col card ${isFull && "full"}`}>
        <img src={strDrinkThumb} alt="" />
        <div className="col full-info">
          <span>{strCategory}</span>
          <h1>{strDrink}</h1>

          {isFull && (
            <>
              <button onClick={() => setShowIngrediends(!showIngrediends)}>
                {!showIngrediends ? "Show ingrediends" : "Hide ingrediends"}
              </button>
              {showIngrediends &&
                ingredients.map((item) => <span>{item}</span>)}
              <h3>Instructions</h3>
              <p>{strInstructions}</p>
            </>
          )}

          {!isFull && (
            <Link className="more" to={`/cocktailDetails/${idDrink}`}>
              More
            </Link>
          )}
        </div>
      </div>
    );
  } else {
    const { strDescription, strType } = ingredient;
    return (
      <div className="col card-info">
        <img
          className="img"
          src={`https://www.thecocktaildb.com/images/ingredients/${strType.toLowerCase()}.png`}
          alt=""
        />
        <div className="info">
          <h1>{strType}</h1>
          <p>{strDescription}</p>
        </div>
      </div>
    );
  }
};

export default Card;

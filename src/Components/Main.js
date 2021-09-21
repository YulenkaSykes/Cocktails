import React, { useState, useEffect, useContext } from "react";
import Slider from "./Slider";
import { Context } from "../App";
import Card from "./Card";

const Main = () => {
  const { getData } = useContext(Context);
  const [cocktailsArr, setCocktailsArr] = useState([]);
  const quantity = 5;

  useEffect(() => {
    getData({ name: "f", value: "m" }, setCocktailsArr);
  }, []);

  return (
    <div className="col main">
      <h1>Cocktail of the day</h1>
      <div className="row centered wrapp">
        {cocktailsArr.length > 0 && (
          <Slider numberToShow={quantity}>
            {cocktailsArr.length > 0 &&
              cocktailsArr.map((item) => <Card drink={item} />)}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Main;

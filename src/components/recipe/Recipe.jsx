import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayRecipe from "./DisplayRecipe";
import Navbar from "./../navbar/Navbar";
import SearchRecipe from "./SearchRecipe";
const Recipe = ({ authUser, setRecipe }) => {
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: { from: "10", size: "30", tags: "under_30_minutes" },
      headers: {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "c2444025e6msh1d961594ef7504dp1d1db2jsnc3b211ac1375",
      },
    };
    axios
      .request(options)
      .then(function (res) {
        console.log(res.data.results);
        let id = 1;
        const tempList = res.data.results.map((recipeObj) => {
          console.log(recipeObj);
          const newObj = {};
          newObj.id = id;
          newObj.recipeName = recipeObj.name;
          if (!recipeObj.instructions) {
            newObj.description = recipeObj.recipes[1].instructions;
          } else {
            newObj.description = recipeObj.instructions;
          }
          newObj.link = recipeObj.video_url;
          newObj.imgUrl = recipeObj.thumbnail_url;
          newObj.totalTime = recipeObj.total_time_tier;
          id++;
          return newObj;
        });
        setRecipeList([...tempList]);
        console.log(tempList);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <DisplayRecipe recipeList={recipeList} setRecipe={setRecipe} />
      <SearchRecipe recipeList={recipeList} setRecipeList={setRecipeList} />
    </div>
  );
};

export default Recipe;

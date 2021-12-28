import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayRecipe from "./DisplayRecipe";
import Navbar from "./../navbar/Navbar";
import SearchRecipe from "./SearchRecipe";
import { useHistory } from "react-router-dom";
import userApi from "../api/userApi";
const Recipe = ({ authUser, setRecipe, currentUser, setCurrentUser }) => {
  const history = useHistory("/");
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      history.push("/not-allow");
    }
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
        let id = 1;
        const tempList = res.data.results.map((recipeObj) => {
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
      })
      .then(() => {
        userApi
          .getLoggedInUser()
          .then((res) => {
            console.log(res.data, " this is current user");
            setCurrentUser(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const onClickSearch = (searchWord) => {
    axios(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchWord}&app_id=44c9ef49&app_key=4651625a63a751dd45bb66221721ff96&imageSize=REGULAR`
    ).then((res) => {
      console.log(res.data.hits);
      const tempList = res.data.hits.map((recipe) => {
        const newObj = {};
        newObj.recipeName = recipe.recipe.label;
        newObj.description = recipe.recipe.ingredients;
        newObj.link = recipe.recipe.url;
        newObj.imgUrl = recipe.recipe.image;
        newObj.totalTime = recipe.recipe.totalTime;
        return newObj;
      });
      setRecipeList([...tempList]);
      console.log(tempList, "this is new Temp List from search");
    });
  };
  return (
    <div>
      <Navbar onClickSearch={onClickSearch} />
      <DisplayRecipe recipeList={recipeList} setRecipe={setRecipe} />
      <SearchRecipe recipeList={recipeList} setRecipeList={setRecipeList} />
    </div>
  );
};

export default Recipe;

import React, { useState } from "react";
import Navbar from "./../navbar/Navbar";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import { createRecipe } from "../api/recipeApi";

const divStyle = {
  width: "60%",
  margin: "10px auto",
  display: "flex",
  alignItems: "center",
};
const imgDivStyle = {
  width: "100%",
};
const RecipeDetail = ({ recipe }) => {
  //   const getNewDescription = () => {
  //     let newDescription = "";
  //     for (let i = 0; i <= 2; i++) {
  //       newDescription += recipe.description[i]["display_text"] + " ";
  //     }
  //     return newDescription;
  //   };
  const [recipeInfo, setRecipeInfo] = useState({
    recipeName: recipe.recipeName,
    description: recipe.description[0].display_text,
    link: recipe.link,
    imgUrl: recipe.imgUrl,
  });
  const onSaveRecipe = (e) => {
    e.preventDefault();
    console.log(recipeInfo, " this is recipeInfo from Detail");
    createRecipe(recipeInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const onChangeInput = (e) => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div style={divStyle}>
        <div style={imgDivStyle}>
          <img style={{ width: "100%" }} src={recipe.imgUrl} />
        </div>
        <div style={{ padding: "20px" }}>
          <h1>{recipe.recipeName}</h1>
          {recipe.description.map((text) => (
            <ul>
              {text["display_text"] ? (
                <li>{text["display_text"]}</li>
              ) : (
                <li>{text["text"]}</li>
              )}
            </ul>
          ))}
          {recipe.link && (
            <a href={recipe.link} target="_blank" rel="noopener noreferrer">
              {recipe.link}
            </a>
          )}
        </div>
      </div>
      <form onSubmit={onSaveRecipe}>
        <input
          type="hidden"
          name="recipeName"
          onChange={onChangeInput}
          value={recipeInfo.recipeName}
        />
        <input
          type="hidden"
          name="description"
          value={recipeInfo.description}
        />
        <input
          type="hidden"
          onChange={onChangeInput}
          name="link"
          value={recipeInfo.link}
        />
        <input
          type="hidden"
          onChange={onChangeInput}
          name="imgUrl"
          value={recipeInfo.imgUrl}
        />
        <Button
          onChange={onChangeInput}
          variant="contained"
          type="submit"
          style={{ marginLeft: "10px", backgroundColor: "#262416" }}
        >
          SAVE
        </Button>
      </form>
      <Button
        variant="contained"
        style={{
          marginLeft: "10px",
          backgroundColor: "#90B274",
        }}
      >
        <Link to={"/recipes"}>HOME</Link>
      </Button>
    </div>
  );
};

export default RecipeDetail;

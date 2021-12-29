import React, { useState } from "react";
import Navbar from "./../navbar/Navbar";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import { onSaveRecipe } from "../utils/onSaveRecipe";
import { getLongDescription } from "../utils/getLongDescription";

const divStyle = {
  width: "60%",
  margin: "10px auto",
  display: "flex",
  alignItems: "center",
};
const imgDivStyle = {
  width: "100%",
};
const RecipeDetail = ({ recipe, currentUser }) => {
  console.log(currentUser);
  const [recipeInfo, setRecipeInfo] = useState({
    recipeName: recipe.recipeName,
    description: getLongDescription(recipe),
    link: recipe.link,
    imgUrl: recipe.imgUrl,
    user_id: currentUser.id,
  });
  console.log(currentUser.id, " user id");

  const onSavHandle = (e) => {
    e.preventDefault();
    onSaveRecipe(recipeInfo, currentUser.id);
  };

  // const onChangeInput = (e) => {
  //   setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  //   console.log(recipeInfo, " this is recipe to put in db");
  // };
  return (
    <div>
      <Navbar />
      <div style={divStyle}>
        <div style={imgDivStyle}>
          <img style={{ width: "100%" }} src={recipe.imgUrl} />
        </div>
        <div style={{ padding: "20px" }}>
          <h1>{recipe.recipeName}</h1>
          {recipe.description.map((text, i) => (
            <ul key={i}>
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
      <div style={{ display: "flex" }}>
        <Button
          onClick={(e) => onSavHandle(e)}
          variant="contained"
          style={{ marginLeft: "10px", backgroundColor: "#262416" }}
        >
          SAVE
        </Button>
        {/* </form> */}
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
    </div>
  );
};

export default RecipeDetail;

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useHistory } from "react-router-dom";
import { onSaveRecipe } from "../utils/onSaveRecipe";
import { getLongDescription } from "../utils/getLongDescription";
const DisplayRecipe = ({ recipeList, setRecipe, currentUser }) => {
  const history = useHistory();
  const onRecipeDetail = (rec) => {
    setRecipe({ ...rec });
    history.push(`/recipes/${rec.id}`);
  };
  const onSaveHandle = (rec) => {
    let recipeInfo = {};
    recipeInfo.recipeName = rec.recipeName;
    recipeInfo.description = getLongDescription(rec);
    recipeInfo.imgUrl = rec.imgUrl;
    recipeInfo.link = rec.link;
    onSaveRecipe(recipeInfo, currentUser.id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        margin: "100px auto",
      }}
    >
      {recipeList.map((recipe, i) => (
        <Card key={recipe.id} sx={{ width: 350 }} style={{ margin: "20px" }}>
          <CardMedia
            component="img"
            height="140"
            image={recipe.imgUrl}
            alt="green iguana"
            onClick={() => onRecipeDetail(recipe)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.recipeName}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onRecipeDetail(recipe)}>
              See Detail
            </Button>
            <Button size="small" onClick={() => onSaveHandle(recipe)}>
              Save
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default DisplayRecipe;

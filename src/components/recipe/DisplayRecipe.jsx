import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useHistory } from "react-router-dom";
const DisplayRecipe = ({ recipeList, setRecipe }) => {
  const history = useHistory();
  const onRecipeDetail = (rec) => {
    setRecipe({ ...rec });
    history.push(`/recipes/${rec.id}`);
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
        <Card
          key={recipe.id}
          sx={{ width: 350 }}
          style={{ margin: "20px" }}
          onClick={() => onRecipeDetail(recipe)}
        >
          <CardMedia
            component="img"
            height="140"
            image={recipe.imgUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.recipeName}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">See Detail</Button>
            <Button size="small">Save</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default DisplayRecipe;

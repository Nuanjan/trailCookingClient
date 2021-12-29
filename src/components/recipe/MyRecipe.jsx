import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { getUserWithRecipes } from "../api/recipeApi";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { deleteRecipe } from "../api/recipeApi";

const MyRecipe = ({ currentUser }) => {
  console.log(currentUser, " this is user in my recipe");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getUserWithRecipes(currentUser.id)
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const onClickDelete = (recipeId) => {
    deleteRecipe(recipeId)
      .then((res) => {
        getUserWithRecipes(currentUser.id)
          .then((res) => {
            console.log(res.data);
            setRecipes(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>{currentUser.username}'s Recipes</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {recipes.length < 1 && <p>No Recipe list to show</p>}
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            sx={{ display: "flex", alignItems: "center" }}
            style={{ width: "70%", margin: "20px" }}
          >
            <CardMedia
              style={{ backgroundSize: "cover" }}
              component="img"
              sx={{ width: 300 }}
              image={recipe.imgUrl}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {recipe.recipeName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {recipe.description}
                </Typography>
              </CardContent>
            </Box>
            <Button
              variant="contained"
              onClick={() => onClickDelete(recipe.id)}
              style={{ margin: "10px", backgroundColor: "#EEB25C" }}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyRecipe;

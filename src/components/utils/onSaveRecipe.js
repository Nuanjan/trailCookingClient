import { createRecipe } from "../api/recipeApi";
export const onSaveRecipe = (recipeInfo, currentUserId) => {
  console.log(recipeInfo, " this is recipeInfo from Detail");
  let recipe = {};
  createRecipe(recipeInfo, currentUserId)
    .then((res) => {
      recipe = res.data;
      return recipe;
    })
    .catch((err) => console.log(err));
};

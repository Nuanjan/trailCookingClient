import axios from "axios";

const API_URL = "http://localhost:8080/api/recipes/";

export const getUserWithRecipes = (user_id) => {
  return axios.get(API_URL + "user/" + user_id);
};

export const deleteRecipe = (recipeId) => {
  let token = localStorage.getItem("auth");
  return axios({
    url: API_URL + recipeId,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createRecipe = (recipeInfo, userId) => {
  let token = localStorage.getItem("auth");
  console.log(recipeInfo, " this is recipe to form");
  console.log(" token from storage: ", token);
  console.log(" user id: ", userId);
  return axios({
    url: API_URL + "create/" + userId,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: recipeInfo,
  });
};

import axios from "axios";

const API_URL = "http://localhost:8080/api/recipes/";

// class recipeApi {
//   createRecipe(recipe) {
//     return axios.post(API_URL + "create", recipe);
//   }
//   getUserWithRecipes(user_id) {
//     return axios.get(API_URL + "user/" + user_id);
//   }
//   deleteRecipe(id) {
//     return axios.delete(API_URL + id);
//   }
// }

// export default recipeApi;

export const createRecipe = (recipeInfo) => {
  let token = localStorage.getItem("auth");
  console.log(recipeInfo, " this is recipe to form");
  console.log(" token from storage: ", token);
  return axios({
    url: API_URL + "create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: recipeInfo,
  });
};

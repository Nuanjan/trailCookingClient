import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Recipe from "./components/recipe/Recipe";
import userApi from "./components/api/userApi";
import RecipeDetail from "./components/recipe/RecipeDetail";
import MyRecipe from "./components/recipe/MyRecipe";

function App() {
  const [authUser, setAuthUser] = useState({});
  const [recipe, setRecipe] = useState({});

  console.log(authUser, " this is authUser");

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login authUser={authUser} setAuthUser={setAuthUser} />
          </Route>
          <Route exact path="/recipes" authUser={authUser}>
            <Recipe setRecipe={setRecipe} />
          </Route>
          <Route path="/recipes/:id">
            <RecipeDetail recipe={recipe} />
          </Route>
          <Route path="/myRecipes">
            <MyRecipe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

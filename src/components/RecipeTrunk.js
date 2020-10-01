import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import RecipeGallery from './RecipeGallery';
import SearchableRecipesGallery from './SearchableRecipesGallery';

const RecipeTrunk = ({ data, types, profilePic, setUser }) => {
  return (
    <div>
      <NavigationBar types={types} />
      <Switch>
        <Route exact path="/category/all">
          <RecipeGallery recipeData={data} />
        </Route>
        <Route exact path="/category/:type">
          <SearchableRecipesGallery recipeData={data} />
        </Route>
      </Switch>
    </div>
  );
};

export default RecipeTrunk;

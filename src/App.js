import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import RecipeTrunk from './components/RecipeTrunk';
import Header from './components/Header';
import withProfile from './components/withProfile';
import YourRecipes from './components/YourRecipes';
import HomePage from './components/HomePage';
import AddRecipe from './components/AddRecipe';
import { getUser, getRecipeData } from './RecipeApi';

const HeaderWithProfilePic = ({ profilePic, setUser }) =>
  withProfile(Header, profilePic, setUser);

const App = (props) => {
  const types = ['Curry', 'Soups', 'Salads', 'Breads', 'Rolls', 'Desert'];
  const [user, setUser] = useState(null);
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  useEffect(() => {
    getRecipeData().then(setRecipeData);
  }, []);

  return (
    <BrowserRouter>
      <div>
        {user ? (
          <HeaderWithProfilePic profilePic={user.avatarUrl} setUser={setUser} />
        ) : (
          <Header style={{ 'border-bottom': '1px solid #888' }} />
        )}
        <Switch>
          <Route exact path="/">
            {!user ? <HomePage /> : <Redirect to="/category/all" />}
          </Route>
          <Route path="/category/:type">
            {!user ? (
              <HomePage />
            ) : (
              <RecipeTrunk data={recipeData} types={types} />
            )}
          </Route>
          {/* <Route path="/yourRecipes">
            {user ? (
              <YourRecipes userId={user.userId} />
            ) : (
              <Redirect to="/category/all" />
            )}
          </Route> */}
          <Route path="/addRecipe">
            {user ? (
              <AddRecipe userId={user.userId} />
            ) : (
              <Redirect to="/category/all" />
            )}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

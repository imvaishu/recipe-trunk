import React, { useState, useEffect } from 'react';
import { getMyRecipes } from '../RecipeApi';

const YourRecipes = ({ userId }) => {
  const [myRecipes, setMyRecipes] = useState([]);
          
  useEffect(() => {
    getMyRecipes(userId).then(setMyRecipes);
  }, [userId]);

  const RecipesDiv = myRecipes.map(recipe => (
    <div
      style={{
        display: 'flex',
        margin: '20px',
        borderBottom: '1px solid #ccc',
      }}
      key={recipe.id}
    >
      <div style={{ margin: '10px' }}>
        <h1>{recipe.title}</h1>
        <p>Ingredients:{recipe.ingredients}</p>
        <p>Method:{recipe.method}</p>
      </div>
    </div>
  ));

  return <div style={{ margin: '20px' }}>{RecipesDiv}</div>;
};

export default YourRecipes;

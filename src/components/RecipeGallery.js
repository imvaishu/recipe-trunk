import React from 'react';
import Recipe from './Recipe';

const RecipeGallery = props => {
  const recipes = props.recipeData.map(details => (
    <Recipe key={details.id} details={details} />
  ));

  return <div style={{ padding: '2% 28% 2% 26%' }}>{recipes}</div>;
};

export default RecipeGallery;

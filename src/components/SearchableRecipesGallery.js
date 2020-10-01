import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeGallery from './RecipeGallery';

const SearchableRecipesGallery = props => {
  const { type } = useParams();
  const filteredRecipes = props.recipeData.filter(({ category }) =>
    category.includes(type)
  );

  return <RecipeGallery recipeData={filteredRecipes} />;
};

export default SearchableRecipesGallery;

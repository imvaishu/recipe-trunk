import React, { useState } from 'react';
import TextBox from './TextBox';
import { addRecipe } from '../RecipeApi';
import '../App.css';

const AddRecipe = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [category, setCategory] = useState('');

  const submitRecipe = () => {
    addRecipe({ title, ingredients, method, category }, userId).then(() => {
      setTitle('');
      setIngredients('');
      setMethod('');
      setCategory('');
    });
  };

  return (
    <div
      style={{ marginLeft: '500px' }}
    >
      <TextBox
        placeholder="Enter Title..."
        className="title"
        value={title}
        onChange={setTitle}
      />
      <TextBox
        placeholder="Enter Ingredients"
        className="ingredients"
        value={ingredients}
        onChange={setIngredients}
      />
      <TextBox
        placeholder="Enter Method"
        className="method"
        value={method}
        onChange={setMethod}
      />
      <TextBox
        placeholder="Category: Curry, Soups, Salads , Breads , Rolls , Desert"
        className="category"
        value={category}
        onChange={setCategory}
      />
      <br/>
      <button onClick={submitRecipe}>Add Recipe</button>
    </div>
  );
};

export default AddRecipe;

import React from 'react';

const Recipe = props => {
  const { title, method, ingredients } = props.details;

  return (
    <div>
      <div
        style={{
          padding: '10px',
          textAlign: 'center',
          margin: '15px',
          border: '1px solid lightgray',
        }}
      >
        <h3>{title}</h3>
        <p>
          <b>Ingredients: </b>
          {ingredients}
        </p>
        <p>
          <b>Method: </b>
          {method}
        </p>
      </div>
    </div>
  );
};

export default Recipe;

const recipePostOption = function (content) {
  return {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(content),
  };
};

const getUser = () => {
  return fetch('/user').then(res => res.json());
};

const logout = () => {
  return fetch('/logout').then(res => res.json());
};

const getRecipeData = () => {
  return fetch('/getRecipes').then(recipes => recipes.json());
};

const getMyRecipes = (userId) => {
  return fetch(`/myRecipes/${userId}`).then(recipes => recipes.json());
};

const addRecipe = (content, userId) => {
  return fetch(`/addRecipe/${userId}`, recipePostOption(content)).then(res =>
    res.json()
  );
};

module.exports = {
  getUser,
  logout,
  getRecipeData,
  getMyRecipes,
  addRecipe,
};

import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

//价格重做
export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-7e696.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      }) //set State
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};

export const ADD_DISH = 'DISHES::ADD_DISH';
export const DELETE_DISH = 'DISHES::DELETE_DISH';
export const DISHES_REQUEST = 'DISHES::REQUEST';
export const DISHES_SUCCESS = 'DISHES::SUCCESS';
export const DISHES_FAILURE = 'DISHES::FAILURE';
export const DISHES_SEARCH_FIELD = 'DISHES::SEARCH_FIELD';
export const CHOOSE_DISH = 'CHOSEN_DISH::CHOOSE_DISH';

export const addDish = newDish => ({
   type: ADD_DISH,
   payload: newDish,
});

export const deleteDish = deletingDishId => ({
   type: DELETE_DISH,
   payload: deletingDishId,
});

export const dishesRequest = () => ({
   type: DISHES_REQUEST,
});

export const dishesSuccess = (dishes) => ({
   type: DISHES_SUCCESS,
   dishes,
});

export const dishesFailure = (error) => ({
   type: DISHES_FAILURE,
   error,
});

export const dishesSearchField = (search) => ({
   type: DISHES_SEARCH_FIELD,
   search,
})

export const chooseDish = (chosenDish) =>({
   type: CHOOSE_DISH,
    chosenDish,
})

export const getDishes = () => async (dispatch) => {
   dispatch(dishesRequest());

   try {
      const response = await window.axios.get('/full-dishes?page=11');

      // if (!response.ok) {
      //    throw new Error("request failed with status " + response.status);
      // }

      dispatch(dishesSuccess(response.data.data));
   } catch (err) {
      dispatch(dishesFailure(err.message));
   }
}
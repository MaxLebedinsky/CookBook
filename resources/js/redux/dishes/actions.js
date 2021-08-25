export const ADD_DISH = 'DISHES::ADD_DISH';
export const DELETE_DISH = 'DISHES::DELETE_DISH';
export const DISHES_REQUEST = 'DISHES::REQUEST';
export const DISHES_SUCCESS = 'DISHES::SUCCESS';
export const DISHES_LINKS_SUCCESS = 'DISHES_LINKS_SUCCESS::SUCCESS';
export const DISHES_FAILURE = 'DISHES::FAILURE';
export const DISHES_SEARCH_FIELD = 'DISHES::SEARCH_FIELD';

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

export const dishesLinksSuccess = (links) => ({
    type: DISHES_LINKS_SUCCESS,
    links,
});

export const dishesFailure = (error) => ({
    type: DISHES_FAILURE,
    error,
});

export const getDishes = (filterEndpoint) => async (dispatch) => {
    dispatch(dishesRequest());
    try {
        const response = await window.axios.get(filterEndpoint);

        dispatch(dishesSuccess(response.data.data));
        dispatch(dishesLinksSuccess(response.data.links));
    } catch (err) {
        dispatch(dishesFailure(err.message));
    }
}
export const CATEGORIES_REQUEST = 'CATEGORIES::REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES::SUCCESS';
export const CATEGORIES_FAILURE = 'CATEGORIES::FAILURE';
export const CATEGORIES_FILTER = 'CATEGORIES::FILTER';

export const categoriesRequest = () => ({
   type: CATEGORIES_REQUEST,
});

export const categoriesSuccess = (categories) => ({
   type: CATEGORIES_SUCCESS,
   categories,
});

export const categoriesFailure = (error) => ({
   type: CATEGORIES_FAILURE,
   error,
});

export const categoriesFilter = (category) => ({
   type: CATEGORIES_FILTER,
   category,
})


export const getCategories = () => async (dispatch) => {
   dispatch(categoriesRequest());

   try {
      const response = await window.axios.get('/categories');

      // if (!response.ok) {
      //    throw new Error("request failed with status " + response.status);
      // }

      dispatch(categoriesSuccess(response.data.data));
   } catch (err) {
      dispatch(categoriesFailure(err.message));
   }
}
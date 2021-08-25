export const SEARCH_TITLE = 'FILTERS::SEARCH_TITLE';
export const FILTER_ORDER = 'FILTERS::FILTER_ORDER';
export const FILTER_CATEGORY = 'FILTERS::FILTER_CATEGORY';
export const INCLUDE_INGREDIENTS = 'FILTERS::INCLUDE_INGREDIENTS';
export const EXCLUDE_INGREDIENTS = 'FILTERS::EXCLUDE_INGREDIENTS';
export const USER_ID = 'FILTERS::USER_ID';
export const FILTER_CATEGORY_VALUE = 'FILTERS::FILTER_CATEGORY_VALUE';
export const FILTER_ORDER_VALUE = 'FILTERS::FILTER_ORDER_VALUE';
export const INCLUDE_INGREDIENTS_VALUE = 'FILTERS::INCLUDE_INGREDIENTS_VALUE';
export const EXCLUDE_INGREDIENTS_VALUE = 'FILTERS::EXCLUDE_INGREDIENTS_VALUE';

export const searchTitle = search => ({
   type: SEARCH_TITLE,
   payload: search,
});

export const filterOrder = order => ({
   type: FILTER_ORDER,
   payload: order,
});

export const filterCategory = category => ({
   type: FILTER_CATEGORY,
   payload: category,
});

export const includeIngredients = ingredients => ({
   type: INCLUDE_INGREDIENTS,
   payload: ingredients,
});

export const excludeIngredients = ingredients => ({
   type: EXCLUDE_INGREDIENTS,
   payload: ingredients,
});

export const userId = id => ({
   type: USER_ID,
   payload: id,
});

export const filterCategoryValue = value => ({
   type: FILTER_CATEGORY_VALUE,
   payload: value,
});

export const filterOrderValue = value => ({
   type: FILTER_ORDER_VALUE,
   payload: value,
});

export const includeIngredientsValue = value => ({
   type: INCLUDE_INGREDIENTS_VALUE,
   payload: value,
})

export const excludeIngredientsValue = value => ({
   type: EXCLUDE_INGREDIENTS_VALUE,
   payload: value,
})
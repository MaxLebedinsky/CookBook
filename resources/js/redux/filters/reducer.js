import {
   SEARCH_TITLE,
   FILTER_ORDER,
   FILTER_CATEGORY,
   INCLUDE_INGREDIENTS,
   EXCLUDE_INGREDIENTS,
   USER_ID,
   FILTER_CATEGORY_VALUE,
} from "./actions";

const initialState = {
   searchTitle: "",
   filterOrder: "rating",
   filterCategory: "",
   includeIngredients: [],
   excludeIngredietns: [],
   userId: "",
   filterCategoryValue: '',
}

export const filtersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEARCH_TITLE: {
         return {
            ...state,
            searchTitle: action.payload,
         };
      }
      case FILTER_ORDER: {
         return {
            ...state,
            filterOrder: action.payload,
         };
      }
      case FILTER_CATEGORY: {
         return {
            ...state,
            filterCategory: action.payload,
         };
      }
      case INCLUDE_INGREDIENTS: {
         return {
            ...state,
            includeIngredients: action.payload,
         };
      }
      case EXCLUDE_INGREDIENTS: {
         return {
            ...state,
            excludeIngredietns: action.payload,
         };
      }
      case USER_ID: {
         return {
            ...state,
            userId: action.payload,
         };
      }
      case FILTER_CATEGORY_VALUE: {
         return {
            ...state,
            filterCategoryValue: action.payload,
         }
      }
      default:
         return state;
   }
}
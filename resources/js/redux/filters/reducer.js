import {
   SEARCH_TITLE,
   FILTER_ORDER,
   FILTER_CATEGORY,
   INCLUDE_INGREDIENTS,
   EXCLUDE_INGREDIENTS,
   USER_ID,
   FILTER_CATEGORY_VALUE,
   FILTER_ORDER_VALUE,
   INCLUDE_INGREDIENTS_VALUE,
   EXCLUDE_INGREDIENTS_VALUE
} from "./actions";

const initialState = {
   searchTitle: "",
   filterOrder: "created_at",
   filterCategory: "",
   includeIngredients: [],
   excludeIngredietns: [],
   userId: "",
   filterCategoryValue: '',
   filterOrderValue: "created_at",
   includeIngredientsValue: '',
   excludeIngredientsValue: '',
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
      case FILTER_ORDER_VALUE: {
         return {
            ...state,
            filterOrderValue: action.payload,
         }
      }
      case INCLUDE_INGREDIENTS_VALUE: {
         return {
            ...state,
            includeIngredientsValue: action.payload,
         }
      }
      case EXCLUDE_INGREDIENTS_VALUE: {
         return {
            ...state,
            excludeIngredientsValue: action.payload,
         }
      }
      default:
         return state;
   }
}
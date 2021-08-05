import { REQUEST_STATUS } from "../../utils/constants";
import {
   CATEGORIES_REQUEST,
   CATEGORIES_SUCCESS,
   CATEGORIES_FAILURE,
   CATEGORIES_FILTER
} from "./actions"

const initialState = {
   categoryList: [],
   categoryFilter: "",
   request: {
      status: REQUEST_STATUS.IDLE,
      error: '',
   }
}

export const categoryListReducer = (state = initialState, action) => {
   switch (action.type) {
      case CATEGORIES_REQUEST: {
         return {
            ...state,
            request: {
               status: REQUEST_STATUS.PENDING,
               error: "",
            }
         };
      }
      case CATEGORIES_FAILURE: {
         return {
            ...state,
            request: {
               status: REQUEST_STATUS.FAILURE,
               error: action.error,
            }
         }
      }
      case CATEGORIES_SUCCESS: {
         return {
            ...state,
            categoryList: action.categories,
            request: {
               status: REQUEST_STATUS.SUCCESS,
               error: "",
            }
         }
      }
      case CATEGORIES_FILTER: {
         return {
            ...state,
            categoryFilter: action.category,
         }
      }
      default:
         return state;
   }
}
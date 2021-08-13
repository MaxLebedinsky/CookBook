import {combineReducers} from 'redux';
import {categoryListReducer} from './categories/reducer';
import {dishListReducer} from './dishes/reducer'
import {loginReducer} from './access/reducer'

export const reducers = combineReducers({
    categories: categoryListReducer,
    dishes: dishListReducer,
    access: loginReducer
})

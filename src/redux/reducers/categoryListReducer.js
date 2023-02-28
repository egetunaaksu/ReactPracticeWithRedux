import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeCategoryReducer(state=initialState.categories,action){// reducer bizim için state döndürür. Bir tutucu gibi düşünülebilir
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORIES_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }
}
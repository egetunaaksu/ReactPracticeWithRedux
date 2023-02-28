import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}//burada payload seçilen category ile eşdeğerdir.
}

export function getCategoriesSuccess(categories){
    return {type:actionTypes.CHANGE_CATEGORIES_SUCCESS,payload:categories}
}

export function getCategories(){
    return function(dispatch){
        let url = "http://localhost:3000/categories"
        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)));
    };
}
import { types } from "../types/types";

const initialState = {
    showComponents: true,
}


export const uiReducer = (state=initialState, action) =>{

    switch(action.type){

        case types.uiShowComponents:
            return{
                ...state,
                showComponents: true,
            };

        case types.uiHideComponents:
            return{
                ...state,
                showComponents: false,
            };
            
        default:
            return state;
    }
}


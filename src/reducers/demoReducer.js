import { types } from "../types/types";


export const demoReducer = ( state={ email:"ooo", password: "123"}, action ) => {

    switch (action.type) {
        case types.registerDemo:
            
            return {
                ...state,
                logged: false
            };

        case types.loginDemo:
        
            return {
                ...state,
                logged: true
            };
        
        case types.logoutDemo:
        
            return {
                ...state,
                logged: false
            };
    
        default:
            return state;
    }

}
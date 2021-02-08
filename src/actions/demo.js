import { types } from "../types/types";


export const startLoginEmailPassword = (demoState) =>{

    return {
        type: types.loginDemo,
        payload: {
            demoState,
            logged: true
        }
    }   
}

export const startLogout = (demoState) =>{

    return {
        type: types.logoutDemo,
        payload: {
            demoState,
            logged: false
        }
    }   
}

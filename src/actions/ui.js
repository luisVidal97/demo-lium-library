import { types } from "../types/types";

export const showComponentsTab = () =>(
    {
        type: types.uiShowComponents,
    }
)

export const hideComponentsTab = () =>(
    {
        type: types.uiHideComponents,
    }
)
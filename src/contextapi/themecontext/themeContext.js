import { createContext, useContext } from "react";

const themeContext = createContext() 

export default themeContext;

export const useTheme = ()=>{
    let allState = useContext(themeContext);
    return allState;
}


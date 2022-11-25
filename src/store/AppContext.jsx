import { createContext, useState } from "react";

export const MyContext = createContext(null);



export const AppContext = ({children}) => {


    const [store, setStore] = useState({
        isUserAuth: false,
        theme: 'light'
    })

return (

        <MyContext.Provider value={ {store, setStore} }>
            {children}
        </MyContext.Provider>


)

}

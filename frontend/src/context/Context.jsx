import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [userCTX, setUserCTX] = useState({})
    const [postsCTX, setPostsCTX] = useState([])

    console.log('Context');
    console.log(userCTX);
    return (
        <Context.Provider value={{ userCTX, setUserCTX, postsCTX, setPostsCTX }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [userCTX, setUserCTX] = useState({})
    const [postsCTX, setPostsCTX] = useState([])
    const [stateCTX, setStateCTX] = useState(false)

    return (
        <Context.Provider value={{ userCTX, setUserCTX, postsCTX, setPostsCTX, stateCTX, setStateCTX }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
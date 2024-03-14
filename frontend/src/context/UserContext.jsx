import { createContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [userCTX, setUserCTX] = useState({})
    console.log(userCTX);

    return (
        <UserContext.Provider value={{ userCTX, setUserCTX }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
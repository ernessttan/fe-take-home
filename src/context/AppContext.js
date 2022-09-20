import { createContext } from "react";
import { useColorMode } from "@chakra-ui/react";
import { HyperspaceClient } from "hyperspace-client-js";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const { colorMode } = useColorMode();
    // API client for accessing Hyperspace data
    const hyperClient = new HyperspaceClient(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGRSBJbnRlcnZpZXciLCJuYW1lIjoiSHlwZXJzcGFjZSIsImlhdCI6MTUxNjIzOTAyMn0.HDfB97Y1pgQqQ6GshXsh5nz7fA1_ban9MTZDAbgobJk"
    );

    return (
        <AppContext.Provider value={{
            colorMode, hyperClient
        }}
        >
            {children}
        </AppContext.Provider>
    )
}


import { createContext, useContext } from "react";

export const LoggedContext = createContext(null);

export const useLoggedContext = () => useContext(LoggedContext);

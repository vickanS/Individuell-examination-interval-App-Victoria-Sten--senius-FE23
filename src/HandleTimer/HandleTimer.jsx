import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [time, setTime] = useState(0);

return (
    <TimerContext.Provider value={{time, setTime}}>
        {children}
    </TimerContext.Provider> 
 )
}

export const useTimer = () => {
    return useContext(TimerContext)
}
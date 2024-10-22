import React, { Children, createContext, useContext, useState } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ Children }) => {
    const [time, setTime] = useState(0);

return (
    <TimerContext.Provider value={{time, setTime}}>
        { Children }
    </TimerContext.Provider> 
 )
}

export const useTimer = () => {
    return useContext(TimerContext)
}
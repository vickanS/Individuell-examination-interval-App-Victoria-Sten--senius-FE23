import { createContext, useContext, useState, useEffect } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning && time > 0) {
            intervalId = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime > 0) {
                        return prevTime - 1; 
                    } else {
                        clearInterval(intervalId);
                        setIsRunning(false);
                        return 0;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(intervalId); 
    }, [isRunning, time]);

    const startTimer = (initialTime) => {
        setTime(initialTime * 60);
        setIsRunning(true);
    };

    const handleAbort = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <TimerContext.Provider value={{ time, setTime, isRunning, startTimer, handleAbort }}>
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => {
    return useContext(TimerContext);
};
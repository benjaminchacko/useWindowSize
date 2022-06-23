import { useState, useEffect } from "react";

const getBreakPoint = windowWidth => {
    if (windowWidth) {
        if (windowWidth < 400) {
            return "sm";
        } else if (windowWidth < 1024) {
            return "md";
        } else if (windowWidth < 1200) {
            return "lg";
        } else {
            return "x-lg";
        }
    }
    else {
        return undefined
    }
};
const useWindowSize = () => {
    const isWindowClient = typeof window === "object";
    const [windowSize, setWindowSize] = useState(
        isWindowClient
            ? getBreakPoint(window.innerWidth)
            : undefined
    );

    useEffect(() => {
        const setSize = () => {
            setWindowSize(getBreakPoint(window.innerWidth));
        }

        if (isWindowClient) {
            window.addEventListener("resize", setSize);

            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
};

export default useWindowSize;

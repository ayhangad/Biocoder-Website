import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useSelectedRoute() {
    const location = useLocation();
    const [pathname, setPathName] = useState(location.pathname);
    useEffect(() => {
        setPathName(location.pathname)
    }, [location.pathname])
    return pathname
}
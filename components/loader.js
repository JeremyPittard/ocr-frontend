import { loadingAnimation } from "../animations/animations";
import { useEffect } from "react";

const Loader = () => {
    useEffect(() => {
        loadingAnimation();
    }, [])
    return(
        <div className="loader flex items-center justify-center">
            <div className="load-1 rounded h-6 w-6 bg-ocr-secondary"></div>
            <div className="load-2 rounded h-6 w-6 bg-ocr-primary mx-1"></div>
            <div className="load-3 rounded h-6 w-6 bg-ocr-secondary"></div>
        </div>
    )
}

export default Loader;
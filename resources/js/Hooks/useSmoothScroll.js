import { useEffect } from "react";

export const useSmoothScroll = () => {
    useEffect(() => {
        // Enable smooth scrolling for the entire page
        document.documentElement.style.scrollBehavior = "smooth";

        return () => {
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    const scrollToSection = (sectionId, offset = 0) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return { scrollToSection, scrollToTop };
};

export default useSmoothScroll;

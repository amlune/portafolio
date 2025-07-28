'use client';

import { useRef } from "react";

const useScrolltoSection = () => {
    const experience = useRef(null);
    const skills = useRef(null);
    const aboutme = useRef(null);
    const projects = useRef(null);
    const contactme = useRef(null);

    const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    }

    return {
        experience,
        skills,
        aboutme,
        projects,
        contactme,
        scrollToSection
    };
}

export default useScrolltoSection;

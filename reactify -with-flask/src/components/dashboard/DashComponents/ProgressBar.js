import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faCut, faTachometerAlt, faRocket, } from "@fortawesome/free-solid-svg-icons";
const Service = ({ icon, title }) => (_jsxs("div", { className: "service", children: [_jsx(FontAwesomeIcon, { icon: icon }), _jsx("h2", { className: "service-heading", children: title })] }));
const ProgressBar = ({ label, percent }) => (_jsxs("div", { className: "progress-bar", children: [_jsxs("p", { className: "progress-text", children: [label, _jsx("span", { children: percent }), "%"] }), _jsx("div", { className: "progress-percent", style: { width: `${percent}%` } })] }));
const AboutMeSection = () => {
    const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];
    const navbarRef = useRef(null);
    const progressRef = useRef(null);
    const sectionRef = useRef(null);
    useEffect(() => {
        const mainFn = () => {
            if (window.pageYOffset >= (navbarRef.current?.offsetTop || 0)) {
                navbarRef.current?.classList.add("sticky");
            }
            else {
                navbarRef.current?.classList.remove("sticky");
            }
            if (window.pageYOffset + window.innerHeight >=
                (progressRef.current?.offsetTop || 0)) {
                const progressBarEls = document.querySelectorAll(".progress-percent");
                progressBarEls.forEach((el, i) => {
                    el.style.width = `${progressBarPercents[i]}%`;
                    el.previousElementSibling.firstElementChild.textContent = `${progressBarPercents[i]}`;
                });
            }
        };
        window.addEventListener("scroll", mainFn);
        window.addEventListener("resize", () => {
            window.location.reload();
        });
        return () => {
            window.removeEventListener("scroll", mainFn);
            window.removeEventListener("resize", () => {
                window.location.reload();
            });
        };
    }, [progressBarPercents]);
    return (_jsxs("section", { className: "section-2", id: "section-2", ref: sectionRef, children: [_jsx("h1", { className: "section-heading section-2-heading", children: "About Me" }), _jsx("div", { className: "progress-bars-wrapper", ref: progressRef, children: progressBarPercents.map((percent, i) => (_jsx(ProgressBar, { label: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "SASS",
                        "ReactJS",
                        "NodeJS",
                        "MongoDB",
                    ][i], percent: percent }, i))) }), _jsxs("div", { className: "services", children: [_jsx(Service, { icon: farLightbulb, title: "Creative" }), _jsx(Service, { icon: faCut, title: "Problem Solving" }), _jsx(Service, { icon: faTachometerAlt, title: "Fast" }), _jsx(Service, { icon: faRocket, title: "Dynamic" })] })] }));
};
export default AboutMeSection;

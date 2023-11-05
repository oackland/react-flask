// import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";
// import {
//   faCut,
//   faTachometerAlt,
//   faRocket,
// } from "@fortawesome/free-solid-svg-icons";
//
// interface ServiceProps {
//   icon: typeof farLightbulb; // use one of the icons as the type for simplicity
//   title: string;
// }
//
// const Service: React.FC<ServiceProps> = ({ icon, title }) => (
//   <div className="service">
//     <FontAwesomeIcon icon={icon} />
//     <h2 className="service-heading">{title}</h2>
//   </div>
// );
//
// interface ProgressBarProps {
//   label: string;
//   percent: number;
// }
//
// const ProgressBar: React.FC<ProgressBarProps> = ({ label, percent }) => (
//   <div className="progress-bar">
//     <p className="progress-text">
//       {label}
//       <span>{percent}</span>%
//     </p>
//     <div className="progress-percent" style={{ width: `${percent}%` }}></div>
//   </div>
// );
//
// interface AboutMeSectionProps {
//   falightbulb: string;
// }
//
// const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
//   const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];
//   const navbarRef = useRef<HTMLDivElement | null>(null);
//   const progressRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//
//   useEffect(() => {
//     const mainFn = () => {
//       if (window.pageYOffset >= (navbarRef.current?.offsetTop || 0)) {
//         navbarRef.current?.classList.add("sticky");
//       } else {
//         navbarRef.current?.classList.remove("sticky");
//       }
//
//       if (
//         window.pageYOffset + window.innerHeight >=
//         (progressRef.current?.offsetTop || 0)
//       ) {
//         const progressBarEls = document.querySelectorAll(".progress-percent");
//         progressBarEls.forEach((el, i) => {
//           (el as HTMLElement).style.width = `${progressBarPercents[i]}%`;
//           (
//             el.previousElementSibling as HTMLElement
//           ).firstElementChild.textContent = `${progressBarPercents[i]}`;
//         });
//       }
//     };
//
//     window.addEventListener("scroll", mainFn);
//     window.addEventListener("resize", () => {
//       window.location.reload();
//     });
//
//     return () => {
//       window.removeEventListener("scroll", mainFn);
//       window.removeEventListener("resize", () => {
//         window.location.reload();
//       });
//     };
//   }, [progressBarPercents]);
//
//   return (
//     <section className="section-2" id="section-2" ref={sectionRef}>
//       <h1 className="section-heading section-2-heading">About Me</h1>
//
//       <div className="progress-bars-wrapper" ref={progressRef}>
//         {progressBarPercents.map((percent, i) => (
//           <ProgressBar
//             key={i}
//             label={
//               [
//                 "HTML",
//                 "CSS",
//                 "JavaScript",
//                 "SASS",
//                 "ReactJS",
//                 "NodeJS",
//                 "MongoDB",
//               ][i]
//             }
//             percent={percent}
//           />
//         ))}
//       </div>
//
//       <div className="services">
//         <Service icon={farLightbulb} title="Creative" />
//         <Service icon={faCut} title="Problem Solving" />
//         <Service icon={faTachometerAlt} title="Fast" />
//         <Service icon={faRocket} title="Dynamic" />
//       </div>
//     </section>
//   );
// };
//
// export default AboutMeSection;

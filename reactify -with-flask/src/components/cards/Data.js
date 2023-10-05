import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PopularTour from "./data/Card";
const Data = ({ cardTitle, popularTourCardTitle, tourName, }) => {
    return (_jsxs("section", { className: "popular-tours", children: [_jsx("h3", { className: "popular-tours-heading", children: "Libre Coding Space" }), _jsx("div", { className: "cards-wrapper", children: _jsx(PopularTour, { backTitle: "$399", imageUrl: "../../../public/img/TaskList.jpg", content1: "Up to 20 people", content2: "4 tour guides", content3: "Sleep in private tents", content4: "Difficulty: medium", content5: "Other content", summary: "var", cardTitle: cardTitle, tourName: tourName }) }), _jsx("h3", { className: "popular-tours-heading", children: "Libre Coding Space" }), _jsx("div", { className: "cards-wrapper", children: _jsx(PopularTour, { tourName: "Task Manager", backTitle: "$399", imageUrl: "../../../public/img/TaskList.jpg", content1: "Up to 20 people", content2: "4 tour guides", content3: "Sleep in private tents", content4: "Difficulty: medium", content5: "Other content", summary: "var", cardTitle: popularTourCardTitle }) })] }));
};
export default Data;

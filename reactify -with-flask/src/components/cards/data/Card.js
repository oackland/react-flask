import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Card = ({ cardTitle, backTitle, imageUrl, content1, content2, content3, content4, content5, summary, tourName, }) => {
    return (_jsxs("div", { className: "card", children: [_jsxs("div", { className: "front-side", children: [_jsx("img", { src: imageUrl, alt: cardTitle, className: "card-image" }), _jsx("h1", { className: "tour-name", children: cardTitle }), _jsxs("ul", { className: "card-list", children: [_jsx("li", { className: "card-list-item", children: content1 }), _jsx("li", { className: "card-list-item", children: content2 }), _jsx("li", { className: "card-list-item", children: content3 }), _jsx("li", { className: "card-list-item", children: content4 }), _jsx("li", { className: "card-list-item", children: content5 })] }), _jsx("button", { className: "navigation-button", children: "price >>" })] }), _jsxs("div", { className: "back-side center", children: [_jsx("button", { className: "navigation-button", children: "<< back" }), _jsx("h3", { className: "tour-price", children: backTitle }), _jsx("button", { className: "card-button", children: summary })] })] }));
};
export default Card;

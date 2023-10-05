import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
const Draggable = ({ children }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const ref = useRef(null);
    const handleMouseDown = () => {
        setIsDragging(true);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };
    const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };
    const handleMouseMove = (e) => {
        if (ref.current && isDragging) {
            setPosition({
                x: e.clientX - ref.current.getBoundingClientRect().left,
                y: e.clientY - ref.current.getBoundingClientRect().top,
            });
        }
    };
    return (_jsx("div", { ref: ref, onMouseDown: handleMouseDown, style: {
            cursor: isDragging ? "grabbing" : "grab",
            position: "absolute",
            left: position.x,
            top: position.y,
        }, children: children }));
};
export default Draggable;

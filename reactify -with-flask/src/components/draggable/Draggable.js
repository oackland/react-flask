import { jsx as _jsx } from "react/jsx-runtime";
// Draggable.tsx
import React, { useState, useRef } from "react";
const Draggable = ({ children }) => {
    const [isDragging, setDragging] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const ref = useRef(null);
    const onMouseDown = (e) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            setDragging(true);
        }
    };
    const onMouseMove = (e) => {
        if (isDragging && ref.current) {
            ref.current.style.left = `${e.clientX - pos.x}px`;
            ref.current.style.top = `${e.clientY - pos.y}px`;
        }
    };
    const onMouseUp = () => {
        setDragging(false);
    };
    React.useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, [isDragging, pos]);
    return (_jsx("div", { ref: ref, onMouseDown: onMouseDown, style: { position: "absolute", cursor: "grab" }, children: children }));
};
export default Draggable;

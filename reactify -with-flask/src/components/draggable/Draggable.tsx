import React, { useState, useRef, ReactNode } from "react";

interface DraggableProps {
  children: ReactNode;
}

const Draggable: React.FC<DraggableProps> = ({ children }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const ref = useRef<HTMLDivElement | null>(null);

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

  const handleMouseMove = (e: MouseEvent) => {
    if (ref.current && isDragging) {
      setPosition({
        x: e.clientX - ref.current.getBoundingClientRect().left,
        y: e.clientY - ref.current.getBoundingClientRect().top,
      });
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;

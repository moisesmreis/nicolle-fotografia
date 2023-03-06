import React, { useState } from 'react';

const MouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = event => {
        setPosition({ x: event.clientX, y: event.clientY });
    }

    return (
        <div className="mouse-tracker" onMouseMove={handleMouseMove}>
            <div className="absolute rounded-full w-16 h-16 border" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
        </div>
    );
}

export default MouseTracker;

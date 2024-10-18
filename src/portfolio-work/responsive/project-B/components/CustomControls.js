import React from "react";

const CustomControls = ({ isMuted, toggleMute }) => {
  return (
    <div className="custom-controls">
      <button onClick={toggleMute}>
        {isMuted ? (
          <span className="icon icon_mute"></span>
        ) : (
          <span className="icon icon_unmute"></span>
        )}
      </button>
    </div>
  );
};

export default CustomControls;

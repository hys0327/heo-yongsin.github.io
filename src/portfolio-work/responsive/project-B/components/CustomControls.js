import React from "react";

const CustomControls = ({ isMuted, toggleMute, selectedIndex }) => {
  return (
    <div className="custom-controls">
      <div className="button_wrap">
        <div className="badge">
          <span className="text">{`Top ${selectedIndex + 1}`}</span>
        </div>
        <button>
          <span className="text">상세 정보</span>
        </button>
      </div>
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

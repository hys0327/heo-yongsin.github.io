import React from "react";

const DesktopView = () => {
  return (
    <div style={styles.container}>
      <h1>Desktop View for Project A</h1>
      <p>
        This is the desktop view for Project A. The screen is optimized for
        desktop devices.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#e0e0e0",
    textAlign: "center",
    height: "100vh",
    boxSizing: "border-box",
  },
};

export default DesktopView;

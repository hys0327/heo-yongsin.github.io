import React from "react";

const MobileView = () => {
  return (
    <div style={styles.container}>
      <h1>Mobile View for Project A</h1>
      <p>
        This is the mobile view for Project A. The screen is optimized for
        mobile devices.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    height: "100vh",
    boxSizing: "border-box",
  },
};

export default MobileView;

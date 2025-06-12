import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div
      style={{
        color: "rgb(82, 81, 78)",
        fontFamily: "monospace",
        fontSize: "24px",
        fontWeight: "bold",
        textShadow:
          "0 0 5px hsl(169, 7.60%, 41.20%), 0 0 10px rgb(200, 0, 255)",
      }}
    >
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "competitive programmer",
            "Fitness Enthusiast",
            "Poetry writer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;

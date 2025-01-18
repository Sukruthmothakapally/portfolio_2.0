import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "AI Engineer",
          "Backend & Full-Stack",
        ],
        autoStart: true,
        loop: true,
        typeSpeed: 50, // Faster typing speed
        deleteSpeed: 70, // Faster deleting speed
        delay: 50, // Reduce delay before switching strings (in milliseconds)
      }}
    />
  );
}


export default Type;

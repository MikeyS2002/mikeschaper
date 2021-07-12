import React from "react";
import Typical from "react-typical";

export const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[" JavaScript", 2000, " React", 2000]}
      />
    );
  },
  (props, prevProp) => true
);

import React from "react";
import ElementsCard from "https://framer.com/m/Elements-Card-zZNC.js@5gVM2ZrwpkFaPVRJjmDL";

const Card = () => {
  return (
    <div>
      <ElementsCard
        // Using default values:
        button="Read More"
        button1={undefined}
        radius={16}
        width={60}
        text={`Infrastructure built for scale, performance and reliability.`}
        title="World-class hosting"
      />
    </div>
  );
};

export default Card;

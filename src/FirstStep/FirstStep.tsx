import React from "react";
import { closeModal } from "../utils";

interface FirstStepProps {
  goToNextStep: () => void;
}

const FirstStep = ({ goToNextStep }: FirstStepProps) => {
  return (
    <div>
      <div>message</div>
      <div>
        <button
          onClick={() => {
            closeModal();
          }}
        >
          later
        </button>
      </div>
      <div>
        <button onClick={goToNextStep}>next step</button>
      </div>
    </div>
  );
};

export default FirstStep;

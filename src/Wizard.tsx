import React from "react";
import { FirstStep } from "./FirstStep";

const Wizard = () => {
  const [step, setStep] = React.useState(0);
  const goToNextStep = (step: number) => () => {
    setStep(step);
  };
  const goToSecondStep = goToNextStep(1);
  // const goToThridStep = goToNextStep(2);

  return (
    <div>
      {step === 0 && <FirstStep goToNextStep={goToSecondStep} />}
      {step === 1 && <div>1</div>}
      {step === 2 && <div>2</div>}
    </div>
  );
};

export default Wizard;

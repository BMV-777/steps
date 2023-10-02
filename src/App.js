import { useState } from "react";
import "./index.css";
import Button from "./components/Button/Button";
import StepMessage from "./components/StepMessage/StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Maks" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // if (step === 2) setTest({ name: "Maks" });
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setTest({ name: "Friends" });
  }

  // function handlerClosed() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button onClick={() => alert(`Lets go ${messages[step - 1]}`)}>
                Hren
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>Previous<span>🎅</span>
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <p className="message">
  {step}: {messages[step - 1]}
  {/* {test.name} */
}
// </p>; */}
// 7/91

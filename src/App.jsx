import { useState } from "react";
import "./App.css";
import tiklogo from "../src/assets/checked 2.png";
import StepOne from "./component/Step1/StepOne";
import StepTwo from "./component/Step2/StepTwo";
import Three from "./component/Step3/Three";
import Four from "./component/Step4/Four";

function App() {
  const formArray = [1, 2, 3, 4];
  const [formNO, setFormNo] = useState(formArray[0]);
  const nextStep = () => {
    setFormNo(formNO + 1);
  };
  const previus = () => {
    setFormNo(formNO - 1);
  };
  return (
    <div className=" lg:max-w-screen-2xl mx-auto lg:px-32 lg:py-20 md:p-8 md:bg-[#E7E7E7] text-[#333333]">
      <div className="md:flex">
        {/* left side text in here  */}
        <div className="border lg:h-[100vh] md:p-8 p-5 bg-[#E6F0F6] shadow-2xl rounded-lg md:w-1/2 ">
          <h1 className="text-3xl font-semibold">
            Self Help Basic ($29/month)
          </h1>
          <p className="text-[#0967AF] text-xl mt-2 mb-7">Alcohol Program</p>
          <p className="text-2xl font-semibold mb-2">Here what you get</p>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3 text-justify">
              <small>
                <span className="font-semibold">Structured online program</span>{" "}
                with 8 comprehensive modules and over 50 thought-provoking
                exercises
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3 text-justify">
              <small>
                <span className="font-semibold">Developed by Dr. Stanton Peele</span>{" "}
                the world leading authority on non-12 step addiction recovery
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3 text-justify">
              <small>
                <span className="font-semibold">Private video coaching</span>{" "}
                option to schedule one-to-one coaching through our secure online video conferencing application
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3 text-justify">
              <small>
                <span className="font-semibold">Life Story Journaling </span>{" "}
                reflect on the journey that you have travelled through life to bring you to where you are today
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3 text-justify">
              <small>
                <span className="font-semibold">Risk-Free 30 Day Trial</span>{" "}
                to try the ENTIRE program so you can decide for yourself if it is for you
              </small>
            </p>
          </div>
        </div> 
        {/* right side form component in here  */}
        <div className="md:w-1/2">
          {formNO === 1 && <StepOne next={nextStep}></StepOne>}
          {formNO === 2 && <StepTwo next={nextStep}></StepTwo>}
          {formNO === 3 && <Three next={nextStep} previus={previus}></Three>}
          {formNO === 4 && <Four next={nextStep}></Four>}
        </div>
      </div>
    </div>
  );
}

export default App;

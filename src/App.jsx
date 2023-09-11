import { useState } from "react";
import "./App.css";
import tiklogo from "../src/assets/checked 2.png";
import StepOne from "./component/Step1/StepOne";

function App() {
  const formArray = [1, 2, 3, 4];
  const [formNO, setFormNo] = useState(formArray[0]);
  const nextStep = () => {
    setFormNo(formNO + 1);
  };
  return (
    <div className=" lg:max-w-screen-2xl mx-auto lg:px-32 lg:py-20 md:p-8 lg:bg-[#E7E7E7] text-[#333333]">
      <div className="md:flex">
        <div className="border lg:h-[1180px] md:p-8 p-3 bg-[#E6F0F6] shadow-2xl rounded-xl md:w-1/2 mx-3">
          <h1 className="text-3xl font-semibold">Self Help Basic ($29/month)</h1>
          <p className="text-[#0967AF] text-xl mt-2 mb-7">Alcohol Program</p>
          <p className="text-2xl font-semibold mb-2">Here what you get</p>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3">
              <small>
                <span className="font-semibold">Structured online program</span> with 8 comprehensive modules and over
                50 thought-provoking exercises
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3">
              <small>
                <span className="font-semibold">Structured online program</span> with 8 comprehensive modules and over
                50 thought-provoking exercises
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3">
              <small>
                <span className="font-semibold">Structured online program</span> with 8 comprehensive modules and over
                50 thought-provoking exercises
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3">
              <small>
                <span className="font-semibold">Structured online program</span> with 8 comprehensive modules and over
                50 thought-provoking exercises
              </small>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-6 h-6" src={tiklogo} alt="" />
            <p className="mx-3">
              <small>
                <span className="font-semibold">Structured online program</span> with 8 comprehensive modules and over
                50 thought-provoking exercises
              </small>
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          {formNO === 1 && <StepOne next={nextStep}></StepOne>
          }
          {formNO === 2 && (
            <div>
              <label htmlFor="name">value</label>
              <input type="text" />
              <button onClick={nextStep} className="btn btn-primary">
                next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

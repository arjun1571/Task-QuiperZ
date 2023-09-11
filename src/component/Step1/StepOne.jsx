import React, { useState } from "react";
import { useForm } from "react-hook-form";

const StepOne = ({ next }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [radioChecked1, setRadioChecked1] = useState(false);
  const [radioChecked2, setRadioChecked2] = useState(false);

  console.log(errors);
  const onSubmit = (data) => {
    if (radioChecked1 && radioChecked2) {
      console.log(data);
      const jsonData = JSON.stringify(data);
      localStorage.setItem("setp one value", jsonData);
      next();
    }
  };

  const handleRadioChange1 = () => {
    setRadioChecked1(!radioChecked1);
  };

  const handleRadioChange2 = () => {
    setRadioChecked2(!radioChecked2);
  };

  return (
    <div className="w-full p-3 bg-[#FDFDFD] rounded lg:h-[100vh]">
      {/* title here  */}
      <div className="flex justify-start font-semibold p-4">
        <p className="font-bold px-5">Step 1</p>
        <p className="text-[#D9D9D9] px-5">Step 2</p>
        <p className="text-[#D9D9D9] px-5">Step 3</p>
        <p className="text-[#D9D9D9] ">Step 4</p>
      </div>
      <hr />
      {/* contact information input form here  */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-5 text-2xl font-semibold">Contact Information</h1>
        {/* main input area  */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            name="firstName"
            placeholder="first name"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            required
            placeholder="email address"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Email <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="conframEamil"
            type="email"
            required
            placeholder="confirm email"
            {...register("confirmEamil", { required: true })}
          />
        </div>
        {/* radio button here  */}
        <label className="">
          <input
            className="lg:mb-4"
            type="radio"
            name="q1"
            value="red"
            onChange={handleRadioChange1}
          />{" "}
          <small>
            By checking this box, you agree to be added to our mailing list. You
            can opt out at any time.
          </small>
        </label>{" "}
        <br />
        <label className="">
          <input
            className=""
            type="radio"
            name="q2"
            value="green"
            onChange={handleRadioChange2}
          />{" "}
          <small>
            By Checking this box, you agree to our{" "}
            <span className="font-semibold underline text-[#126BAD]">
              Terms of Service
            </span>{" "}
            and
            <span className="font-semibold underline text-[#126BAD]">
              {" "}
              Privacy Policy
            </span>
            .
          </small>
        </label>
        {/* submit button here  */}
        <div className="mt-4">
          <button
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              !(radioChecked1 && radioChecked2)
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            type="submit"
            disabled={!(radioChecked1 && radioChecked2)}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;

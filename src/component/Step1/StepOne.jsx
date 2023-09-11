import React from "react";

const StepOne = ({ next }) => {
  return (
    <div className="w-full p-3 bg-[#FDFDFD] rounded">
      <form className="   px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-5 text-2xl font-semibold">Contact Information</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Frist Name <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="fistName"
            placeholder="first name"
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
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="text"
            placeholder="email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Email <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="conframEamil"
            type="text"
            placeholder="confirm email"
          />
        </div>
        <label className="">
          <input className="mb-4" type="radio" name="q1" value="red" /> <small> By checking this box, you  to be added to our mailing list. You can opt out at any time.</small>
        </label> <br />
        <label className="">
          <input className="" type="radio" name="q1" value="red" /> <small> By Checking this box, you agree to our Terms of Service and Privacy Policy.</small>
        </label>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={next}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default StepOne;

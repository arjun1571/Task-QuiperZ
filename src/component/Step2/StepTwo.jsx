import React from "react";

const StepTwo = () => {
  return (
    <div className="w-full p-3 bg-[#FDFDFD] rounded lg:h-[880px]">
      <form className="px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-5 text-2xl font-semibold">Create a Password</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            required
            name="firstName"
            placeholder="password"
            // {...register("firstName", { required: true })}
          />
        </div>
        <div className="mt-96 ">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;

import React from "react";
import { useForm, Controller } from "react-hook-form";

const StepTwo = ({ next }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const hasLowerCase = (value) => /[a-z]/.test(value);
  const hasUpperCase = (value) => /[A-Z]/.test(value);
  const hasSpecialCharacter = (value) => /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(value);

  const onSubmit = (data) => {
    
    console.log(data);
    next(); 
  };

  return (
    <div className="w-full p-3 bg-[#FDFDFD] rounded lg:h-[700px]">
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-5 text-2xl font-semibold">Create a Password</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password <span className="text-red-600">*</span>
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 6 characters",
              },
              validate: {
                hasLowerCase: (value) => hasLowerCase(value) || "Password must contain at least one lowercase letter",
                hasUpperCase: (value) => hasUpperCase(value) || "Password must contain at least one uppercase letter",
                hasSpecialCharacter: (value) => hasSpecialCharacter(value) || "Password must contain at least one special character",
              },
            }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="password"
                />
                <div>
                  {errors.password?.hasLowerCase && (
                    <p className="text-red-600">{errors.password.hasLowerCase}</p>
                  )}
                  {errors.password?.hasUpperCase && (
                    <p className="text-red-600">{errors.password.hasUpperCase}</p>
                  )}
                  {errors.password?.hasSpecialCharacter && (
                    <p className="text-red-600">{errors.password.hasSpecialCharacter}</p>
                  )}
                  {errors.password?.message && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </div>
              </div>
            )}
          />
        </div>
        <div className="mt-96">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;

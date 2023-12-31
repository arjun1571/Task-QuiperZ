import React, { useState, useEffect } from "react";
import tiklogo from "../../assets/checked 2.png";

const Three = ({ next, previus }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  useEffect(() => {
    // Check if the form data is valid to enable the "Next" button
    setIsNextButtonEnabled(handleValidation());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = () => {
    let errors = {};
    let isValid = true;

    // Card Number Validation
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits";
      isValid = false;
    }

    // Expiry Month Validation
    if (!/^\d{2}$/.test(formData.expiryMonth)) {
      errors.expiryMonth = "Expiry month must be 2 digits";
      isValid = false;
    }

    // Expiry Year Validation
    if (!/^\d{4}$/.test(formData.expiryYear)) {
      errors.expiryYear = "Expiry year must be 4 digits";
      isValid = false;
    }

    // CVV Validation
    if (!/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = "CVV must be 3 digits";
      isValid = false;
    }

    setValidationErrors(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      // Proceed to the next step
      next();

      // Console log the user's input
      console.log("User Input:", formData);
      const jsonData = JSON.stringify(formData);
      localStorage.setItem("setp Three value", jsonData);
    } else {
      //   Handle validation errors
      console.log("Form contains errors");
    }
  };

  return (
    <div className="w-full p-3 bg-[#FDFDFD] rounded lg:h-[100vh]">
      {/* title here  */}
      <div className="flex justify-start font-semibold p-4">
        <p className="text-[#D9D9D9] px-5">Step 1</p>
        <p className="text-[#D9D9D9] px-5">Step 2</p>
        <p className=" font-bold px-5">Step 3</p>
        <p className="text-[#D9D9D9] ">Step 4</p>
      </div>
      <hr />
      {/* card information form section here  */}
      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="mb-5 text-2xl font-semibold">
          Payment Setup ($29/month)
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card Number <span className="text-red-600">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              validationErrors.cardNumber ? "border-red-500" : ""
            }`}
            type="text"
            name="cardNumber"
            placeholder="Card number"
            value={formData.cardNumber}
            onChange={handleChange}
            pattern="\d{16}"
          />
          {validationErrors.cardNumber && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.cardNumber}
            </p>
          )}
        </div>
        <div className="mb-4 grid grid-cols-2 md:grid-cols-3 justify-between gap-3">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Expiry Month <span className="text-red-600">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.expiryMonth ? "border-red-500" : ""
              }`}
              type="text"
              name="expiryMonth"
              placeholder="00"
              value={formData.expiryMonth}
              onChange={handleChange}
              pattern="\d{2}"
            />
            {validationErrors.expiryMonth && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.expiryMonth}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Expiry Year <span className="text-red-600">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.expiryYear ? "border-red-500" : ""
              }`}
              type="text"
              name="expiryYear"
              placeholder="0000"
              value={formData.expiryYear}
              onChange={handleChange}
              pattern="\d{4}"
            />
            {validationErrors.expiryYear && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.expiryYear}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              CVV <span className="text-red-600">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.cvv ? "border-red-500" : ""
              }`}
              type="text"
              name="cvv"
              placeholder="000"
              value={formData.cvv}
              onChange={handleChange}
              pattern="\d{3}"
            />
            {validationErrors.cvv && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.cvv}
              </p>
            )}
          </div>
        </div>
        <div className="mt-10 flex">
          <button
            onClick={previus}
            className="w-full mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Previous
          </button>
          <button
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isNextButtonEnabled ? "" : "opacity-50 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!isNextButtonEnabled}
          >
            Next
          </button>
        </div>
      </form>
      {/* card section list data here  */}
      <div className="lg:mx-12 bg-[#E6F0F6] rounded-xl px-7 py-4">
        <h1 className="text-2xl font-semibold mb-2">
          Cancel Anytime - No Minimum Term
        </h1>
        <div className="flex items-center mb-2">
          <img className="w-6 h-6" src={tiklogo} alt="" />
          <p className="mx-3 text-justify">
            <small>
              <span className="font-semibold">
                Cancel within 30 days to get a full refund -
              </span>{" "}
              Hassle Free.No questions asked.
            </small>
          </p>
        </div>
        <div className="flex items-center mb-2">
          <img className="w-6 h-6" src={tiklogo} alt="" />
          <p className="mx-3 text-justify">
            <small>
              <span className="font-semibold">No commitments -</span> Stay on
              the program for as short or as long as you want.
            </small>
          </p>
        </div>
        <div className="flex items-center mb-2">
          <img className="w-6 h-6" src={tiklogo} alt="" />
          <p className="mx-3 text-justify">
            <small>
              <span className="font-semibold">No Contracts</span> - You are not
              obliged to complete the program
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Three;

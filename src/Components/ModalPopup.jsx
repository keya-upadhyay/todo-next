import React from "react";

const ModalPopup = ({ title, onSubmit, isVisible }) => {
  return (
    <div
      className={`h-full w-full text-center bg-black/80  inset-0 space-y-5 flex z-10 flex-col justify-center items-center ${
        isVisible ? "fixed" : "hidden"
      }`}
    >
      <p className="block mt-4">{title}</p>

      <div className="flex items-center justify-center space-x-4">
        <button onClick={onSubmit} className="bg-red-500 text-white px-4 py-2">
          Yes
        </button>

        <button
          onClick={() => setIsvisible(false)}
          className="bg-gray-500 text-white px-4 py-2"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ModalPopup;

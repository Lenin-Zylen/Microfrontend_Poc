import React from "react";

const DeleteModal = ({ handleShowModal }) => {
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-teal-600 hover:bg-teal-700  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center mr-3 "
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={handleShowModal}
              className="text-gray-800 bg-gray-100 hover:bg-gray-200  focus:outline-none  font-medium rounded-md text-sm w-auto  px-4 py-2 text-center "
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

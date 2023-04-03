import React from "react";


const Dashboard = () => {

  return (
    <div className="p-4">
      <div>
        <div className="p-0">
          <div as="h5" className="w-full p-3 border border-gray-200 bg-gray-50 rounded-t-md dark:border-gray-600 dark:bg-gray-700">Dashboard </div>

          <div className="flex bg-white border-gray-200 border code-preview w-full p-3" >
            <div className="flex flex-wrap w-full">
                Dashboard content goes here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
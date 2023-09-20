import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ul>
        <li className="pt-16 pb-8 text-white hover:text-red-700">
          <a href="https://github.com/rsrusson/Machine-Learning-S-P-Forecaster">
            Machine Learning S&P 500 Forecaster on Github
          </a>
        </li>
        <li className="py-8 text-white hover:text-red-700">
          <a href="https://github.com/rsrusson/Scheduler-Application">
            Scheduling Desktop Application
          </a>
        </li>
        <li className="py-8 text-white hover:text-red-700">
          <a href="https://github.com/rsrusson/TravelingSalesmanShippingOptimization">
            Shipping Route Optimization
          </a>
        </li>
        <li className="py-8 text-white hover:text-red-700">
          <a href="https://github.com/rsrusson/MtnBikeWarehouseInventory">
            Mountain Bike Shop Desktop Inventory System
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;

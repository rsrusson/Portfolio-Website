import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="flex flex-col mx-10">
        <li className="flex flex-col text-center">
          <a
            href="https://github.com/rsrusson/Machine-Learning-S-P-Forecaster"
            className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400"
          >
            Machine Learning S&P 500 Forecaster on Github
          </a>
          <img
            src="\images\graph_prediction.png"
            alt="S&P Graph Prediction"
            className="p-10"
          />
          <img
            src="\images\error_predictions.png"
            alt="Predictions Error Rates"
            className="p-10"
          />
          <img
            src="\images\heatmap_correlation.png"
            alt="Prediction Correlation"
            className="p-10"
          />
          <img
            src="\images\bar_correlation_actual_prediction.png"
            alt="Model Importance vs Actual Correlation"
            className="p-10"
          />
        </li>
        <li className="flex flex-col text-center">
          <a
            href="https://github.com/rsrusson/TravelingSalesmanShippingOptimization"
            className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400"
          >
            Shipping Route Optimization
          </a>
        </li>
        <li className="flex flex-col text-center">
          <a
            href="https://github.com/rsrusson/MtnBikeWarehouseInventory"
            className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400"
          >
            Mountain Bike Shop Desktop Inventory System
          </a>
          <img
            src="\images\warehouse_app.png"
            alt="Warehouse Front Page"
            className="p-10"
          />
          <img
            src="\images\warehouse_part.png"
            alt="Warehouse Part Page"
            className="p-10"
          />
          <img
            src="\images\warehouse_product.png"
            alt="Warehouse Product Page"
            className="p-10"
          />
        </li>
        <li className="flex flex-col text-center">
          <h5 className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400">
            Tableau Covid Data Dashboard
          </h5>
          <img
            src="\images\tableau_covid_data.png"
            alt="Covid Data Dashboard"
            className="p-10"
          />
        </li>
      </ul>
    </div>
  );
};

export default Projects;

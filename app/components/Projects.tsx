"use client";
import React, { useState } from "react";

const Projects = () => {
  const [isPyVis, setPyVis] = useState(false);
  const [isJaVis, setJaVis] = useState(false);
  const [isTabVis, setTabVis] = useState(false);
  return (
    <div className="">
      <ul className="flex flex-col mx-10">
        <li className="flex flex-col text-center">
          <div className="m-10">
            <button className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400">
              Show Project
            </button>
            <a
              href="https://github.com/rsrusson/Machine-Learning-S-P-Forecaster"
              className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400"
            >
              Github: Machine Learning S&P 500 Forecaster
            </a>
          </div>

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
          <div className="m-10">
            <button className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400">
              Show Project
            </button>
            <a
              href="https://github.com/rsrusson/MtnBikeWarehouseInventory"
              className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400"
            >
              Github: Mountain Bike Shop Desktop Inventory System
            </a>
          </div>
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
          <div className="m-10">
            <button className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400">
              Show Project
            </button>
            <a className="p-8 m-10 text-white hover:text-red-700 rounded-full bg-slate-400">
              Tableau Covid Data Dashboard
            </a>
          </div>
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

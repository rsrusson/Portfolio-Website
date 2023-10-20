"use client";
import React, { useState } from "react";

const Projects = () => {
  const [isPyVis, setPyVis] = useState(false);
  const [isJaVis, setJaVis] = useState(false);
  const [isTabVis, setTabVis] = useState(false);
  return (
    <div className="py-20">
      <h1 className="mx-32 mb-10 pb-2 text-center text-6xl rounded-3xl bg-stone-500">
        Projects
      </h1>
      <ul className="flex flex-col mx-10">
        <li className="flex flex-col text-center">
          <div className="flex justify-between">
            <button className="flex-left p-5 my-10 ml-40 text-white hover:text-red-700 rounded-md bg-slate-400" onClick={() => {setPyVis(!isPyVis)}}>
              Show Project
            </button>
            <a
              href="https://github.com/rsrusson/Machine-Learning-S-P-Forecaster"
              className="flex-right p-8 my-10 mr-40 text-white hover:text-red-700 rounded-full bg-slate-400"
            >
              Github: Machine Learning S&P 500 Forecaster
            </a>
          </div>
          { isPyVis ? 
          <div className="flex flex-col justify-center items-center">
            <img
            src="\images\graph_prediction.png"
            alt="S&P Graph Prediction"
            className="p-10 w-2/3 h-auto"
            />
            <img
            src="\images\error_predictions.png"
            alt="Predictions Error Rates"
            className="p-10 w-2/3 h-auto"
            />
            <img
            src="\images\heatmap_correlation.png"
            alt="Prediction Correlation"
            className="p-10 w-2/3 h-auto"
            />
            <img
            src="\images\bar_correlation_actual_prediction.png"
            alt="Model Importance vs Actual Correlation"
            className="p-10 w-2/3 h-auto"
            />
          </div> 
          : 
          <div></div> 
          }
        </li>
        <li className="flex flex-col text-center">
          <div className="flex justify-between">
            <button className="p-5 my-10 ml-40 text-white hover:text-red-700 rounded-md bg-slate-400" onClick={ () => {setJaVis(!isJaVis)}}>
              Show Project
            </button>
            <a
              href="https://github.com/rsrusson/MtnBikeWarehouseInventory"
              className="p-8 my-10 mr-40 text-white hover:text-red-700 rounded-full bg-slate-400"
            >
              Github: Mountain Bike Shop Desktop Inventory System
            </a>
          </div>
          {isJaVis ? 
            <div className="flex flex-col items-center">
              <img
              src="\images\warehouse_app.png"
              alt="Warehouse Front Page"
              className="p-10 flex-center w-2/3 h-fit"
              />
              <img
                src="\images\warehouse_part.png"
                alt="Warehouse Part Page"
                className="p-10 flex-center w-2/3 h-fit"
              />
              <img
                src="\images\warehouse_product.png"
                alt="Warehouse Product Page"
                className="p-10 flex-center w-2/3 h-fit"
              />
            </div>
            :
            <div></div>
          }
        </li>
        <li className="flex flex-col text-center">
          <div className="flex justify-between">
            <button className="p-5 my-10 ml-40 text-white hover:text-red-700 rounded-md bg-slate-400" onClick={() => {setTabVis(!isTabVis)}}>
              Show Project
            </button>
            <a className="p-8 my-10 mr-40 text-white hover:text-red-700 rounded-full bg-slate-400">
              Tableau Covid Data Dashboard
            </a>
          </div>
          { isTabVis ?
            <div className="flex justify-center items-center">
              <img
              src="\images\tableau_covid_data.png"
              alt="Covid Data Dashboard"
              className="p-10 w-2/3 h-auto"
              />
            </div>
            :
            <div></div>
          }
          
        </li>
      </ul>
    </div>
  );
};

export default Projects;

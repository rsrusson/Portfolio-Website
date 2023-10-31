"use client";
import React, { useState } from "react";

const Projects = () => {
  const [isPyVis, setPyVis] = useState(false);
  const [isJaVis, setJaVis] = useState(false);
  const [isTabVis, setTabVis] = useState(false);
  return (
    <div className="py-20" id="projects">
      <h1 className="mb-10 pb-2 text-center text-6xl rounded-3xl bg-sky-900">
        {"Projects"}
      </h1>
      <ul className="flex flex-col">
        <li className="flex flex-col text-center my-3">
          <div className="flex justify-between px-10">
            <button className="flex-left p-5 mr-3 text-white hover:bg-slate-400 rounded-md bg-sky-700" onClick={() => {setPyVis(!isPyVis)}}>
              {"Show Project"}
            </button>
            <a
              href="https://github.com/rsrusson/Machine-Learning-S-P-Forecaster"
              className="flex-right p-8 ml-3 text-white hover:bg-slate-400 rounded-full bg-sky-700"
              target="_blank"
            >
              {"Github: Machine Learning S&P 500 Forecaster"}
            </a>
          </div>
          { isPyVis ? 
          <div className="flex flex-col justify-center items-center">
            <img
            src="\images\graph_prediction.png"
            alt="S&P Graph Prediction"
            className="p-10 h-auto"
            />
            <img
            src="\images\error_predictions.png"
            alt="Predictions Error Rates"
            className="p-10 h-auto"
            />
            <img
            src="\images\heatmap_correlation.png"
            alt="Prediction Correlation"
            className="p-10 h-auto"
            />
            <img
            src="\images\bar_correlation_actual_prediction.png"
            alt="Model Importance vs Actual Correlation"
            className="p-10 h-auto"
            />
          </div> 
          : 
          <div></div> 
          }
        </li>
        <li className="flex flex-col text-center my-3">
          <div className="flex justify-between px-10">
            <button className="p-5 mr-3 text-white hover:bg-slate-400 rounded-md bg-sky-700" onClick={ () => {setJaVis(!isJaVis)}}>
              {"Show Project"}
            </button>
            <a
              href="https://github.com/rsrusson/MtnBikeWarehouseInventory"
              className="p-8 ml-3 text-white hover:bg-slate-400 rounded-full bg-sky-700"
              target="_blank"
            >
              {"Github: Mountain Bike Shop Desktop Inventory System"}
            </a>
          </div>
          {isJaVis ? 
            <div className="flex flex-col items-center">
              <img
              src="\images\warehouse_app.png"
              alt="Warehouse Front Page"
              className="p-10 flex-center h-auto"
              />
              <img
                src="\images\warehouse_part.png"
                alt="Warehouse Part Page"
                className="p-10 flex-center h-auto"
              />
              <img
                src="\images\warehouse_product.png"
                alt="Warehouse Product Page"
                className="p-10 flex-center h-auto"
              />
            </div>
            :
            <div></div>
          }
        </li>
        <li className="flex flex-col text-center my-3">
          <div className="flex justify-between px-10">
            <button className="p-5 mr-3 text-white hover:bg-slate-400 rounded-md bg-sky-700" onClick={() => {setTabVis(!isTabVis)}}>
              {"Show Project"}
            </button>
            <a className="p-8 ml-3 text-white hover:bg-slate-400 rounded-full bg-sky-700">
              {"Tableau Covid Data Dashboard"}
            </a>
          </div>
          { isTabVis ?
            <div className="flex justify-center items-center">
              <img
              src="\images\tableau_covid_data.png"
              alt="Covid Data Dashboard"
              className="p-10 h-auto"
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

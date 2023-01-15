import React, { useState, useEffect } from "react";
import "./table.css";
import TrTable from "./TrTable";
import { PartsInterface } from "../APIS";
import TrTableParts from "./TrTableParts";


  interface TableInteface {
    parts: PartsInterface[] 
  }
  
  const TableParts: React.FC<TableInteface> = ({ parts }) => {



  useEffect(() => {
    //localStorage.removeItem("accessToken")

  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table style={{ width: "90%", marginTop:"20px" }} className="table">
        <thead>
          <tr>
            <th>
              <span>Место</span>
            </th>
            <th>
              <span>Имя</span>
            </th>
            <th>
              <span>Тип</span>
            </th>
          </tr>
        </thead>

        <tbody>
            {parts.map((tr)=><TrTableParts tr={tr}></TrTableParts>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default TableParts;

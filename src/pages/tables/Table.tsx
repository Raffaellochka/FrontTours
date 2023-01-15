import React, { useState, useEffect } from "react";
import "./table.css";
import TrTable from "./TrTable";
import { TournamentsInterface, GetTournaments } from "../APIS";



  interface TableInteface {
    tournaments: TournamentsInterface[];
    getTournaments:()=>void
    getParts:(guid: string)=>void
    setPartsCheck:(guid: boolean)=>void
  }
  
  const Table: React.FC<TableInteface> = ({ tournaments,getTournaments, getParts, setPartsCheck }) => {



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
              <span>Название</span>
            </th>
            <th>
              <span>Тип</span>
            </th>
            <th>
              <span>Призовой фонд</span>
            </th>
            <th>
              <span>Победитель</span>
            </th>
          </tr>
        </thead>

        <tbody>
            {tournaments.map((tr)=><TrTable tr={tr} getTournaments={getTournaments} getParts={getParts} setPartsCheck={setPartsCheck}></TrTable>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;

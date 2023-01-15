import React, { useState, useEffect } from "react";
import "./table.css";
import { TournamentsInterface} from "../APIS";
import ModalWindow from "../../Components/ModalWindow/ModalWindow";

interface TrTableInteface {
  tr: TournamentsInterface;
  getTournaments:()=>void
  getParts:(guid: string)=>void
  setPartsCheck:(guid: boolean)=>void
}

const TrTable: React.FC<TrTableInteface> = ({ tr, getTournaments, getParts, setPartsCheck }) => {

  useEffect(() => {}, []);

  return (
    <tr>
      <td style={{cursor:"pointer"}} onClick={()=>{getParts(tr.guid); setPartsCheck(true)}}>{tr.name}</td>
      <td>{tr.type}</td>
      <td>{tr.prize_fond}</td>
      <td>{tr.winner}</td>
    </tr>
  );
};

export default TrTable;

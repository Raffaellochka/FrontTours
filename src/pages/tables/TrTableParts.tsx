import React, { useState, useEffect } from "react";
import "./table.css";
import { PartsInterface, ComsInterface, GetComs} from "../APIS";
import ModalWindow from "../../Components/ModalWindow/ModalWindow";

interface TrTableInteface {
  tr: PartsInterface;
}

const TrTableParts: React.FC<TrTableInteface> = ({ tr }) => {
const [active, setActive]=useState(false)
const [coms, setComs]=useState<ComsInterface[]>([])
async function getComs() {
  try {
    const response = await GetComs(tr.guid);
    setComs(response);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
  useEffect(() => {}, []);

  return (
    <tr>
      <td>{tr.place}</td>
      <td style={{cursor:"pointer"}} onClick={()=>{setActive(true); getComs()}}>{tr.name}</td>
      <td>{tr.type}</td>
      <ModalWindow active={active} setActive={setActive}>
        {coms.map((m)=>{return(
            <div>
                <div>{m.name}</div>
                <div>Время решения: {m.time/3600} ч.</div>
            </div>
        )})}
      </ModalWindow>
    </tr>
  );
};

export default TrTableParts;

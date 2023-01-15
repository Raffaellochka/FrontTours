import React, { useState, useEffect } from "react";
import Table from "./Table";
import CustomButton from "../../Components/UI/Button/CustomButton";
import ModalWindow from "../../Components/ModalWindow/ModalWindow";
import { TournamentsInterface, GetTournaments, PartsInterface, GetParts, MTVInterface, MPVInterface, GetMPV, GetMTV } from "../APIS";
import TableParts from "./TableParts";
function Users() {
  const [tournaments, setTournaments] = useState<TournamentsInterface[]>([]);
  const [parts, setParts] = useState<PartsInterface[]>([]);
  const [partsCheck, setPartsCheck] = useState(false);
  const [MTV, setMTV] = useState<MTVInterface>();
  const [MPV, setMPV] = useState<MPVInterface>();
  const [activeMTV, setActiveMTV]=useState(false)
  const [activeMPV, setActiveMPV]=useState(false)
  async function getTournaments() {
    try {
      const response = await GetTournaments();
      setTournaments(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  async function getParts(guid: string) {
    try {
      const response = await GetParts(guid);
      setParts(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  async function getMTV() {
    try {
      const response = await GetMTV();
      setMTV(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  async function getMPV() {
    try {
      const response = await GetMPV();
      setMPV(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    //localStorage.removeItem("accessToken")
    getTournaments();
    console.log("users");
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        marginTop:"20px"
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "80vh",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0px 4px 14px rgba(3, 0, 124, 0.1)",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
        
          {MTV != undefined && <ModalWindow active={activeMTV} setActive={setActiveMTV}><div>{MTV.value}</div></ModalWindow>}
          {MPV != undefined && <ModalWindow active={activeMPV} setActive={setActiveMPV}><div>{MPV.value}</div></ModalWindow>}
          
        </div>
        
        {!partsCheck ?
        <>
        <div           style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}>        <CustomButton onClick={()=>{setActiveMTV(true); getMTV()}}>Среднее количество задач</CustomButton>
          <CustomButton onClick={()=>{setActiveMPV(true); getMPV()}}>Средняя сумма призового фонда</CustomButton></div>

        <Table tournaments={tournaments} getTournaments={ getTournaments} getParts={getParts} setPartsCheck={setPartsCheck}></Table>
        </> :
        <>
        <CustomButton style={{marginLeft:"50px"}} onClick={()=>setPartsCheck(false)}>{"<="}</CustomButton>
        <TableParts parts={parts}></TableParts>
        </>}
      </div>
    </div>
  );
}

export default Users;

import axios from "axios";

//информация о пользователе для подгрузки в окно редактирования информации и хедер
export interface TournamentsInterface{
  guid: string,
  name: string,
  type: string,
  prize_fond: number,
  winner: string
}
export const GetTournaments = async () => {
  const { data } = await axios.get<TournamentsInterface[]>(
    `http://127.0.0.1:8000/tours/`
  );

  return data;
};

//информация о пользователе для подгрузки в окно редактирования информации и хедер
export interface PartsInterface{
  guid: string,
  place: number,
  name: string,
  type: string,
  obj_guid: string
}
export const GetParts = async (guid: string) => {
  const { data } = await axios.get<PartsInterface[]>(
    `http://127.0.0.1:8000/parts/${guid}`
  );

  return data;
};

//информация о пользователе для подгрузки в окно редактирования информации и хедер
export interface ComsInterface{
  time: number,
  t_guid: number,
  name: string,
}
export const GetComs = async (guid: string) => {
  const { data } = await axios.get<ComsInterface[]>(
    `http://127.0.0.1:8000/comleted/${guid}`
  );

  return data;
};

//информация о пользователе для подгрузки в окно редактирования информации и хедер
export interface MTVInterface{
  value: number,
}
export const GetMTV = async () => {
  const { data } = await axios.get<MTVInterface>(
    `http://127.0.0.1:8000/medium-task-value/`
  );

  return data;
};

//информация о пользователе для подгрузки в окно редактирования информации и хедер
export interface MPVInterface{
  value: number,
}
export const GetMPV = async () => {
  const { data } = await axios.get<MPVInterface>(
    `http://127.0.0.1:8000/medium-prize-value/`
  );

  return data;
};
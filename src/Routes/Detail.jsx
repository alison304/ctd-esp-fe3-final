import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
//import { useMemo } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <h1>Detail Dentist {detail.id}</h1>
      <br />
      <h3>Name: {detail.name}</h3>
      <h3>Email: {detail.email}</h3>
      <h3>Phone: {detail.phone}</h3>
      <h3>Website: {detail.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail;
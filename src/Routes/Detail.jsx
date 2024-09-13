import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Table from '../Components/utils/Table'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [userList, setUserList] = useState([]);
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(url).then((res) => {
      let element = res.data;
      delete element["address"]; // Remove the property
      delete element["company"]; // Remove the property      
      delete element["id"]; // Remove the property
      delete element["username"]; // Remove the property
      let list = [];
      list.push(element);
      setUserList(list);
    });
  }, [url]);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  {/* aqui deberan renderizar la informacion en detalle de un user en especifico */ }
  {/* Deberan mostrar el name - email - phone - website por cada user en especifico */ }
  return (
    <>
      <h1>Detail Dentist {id}</h1>
      <br />
      {userList.length == 0 ? (
        <>
        </>
      ) : (
        <>
          <Table data={userList} />
        </>
      )}

    </>
  )
}

export default Detail;

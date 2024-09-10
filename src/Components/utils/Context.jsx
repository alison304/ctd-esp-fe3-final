import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DentistStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const Context = ({ children }) => {
  const [theme, setTheme] = useState();
  const [dentists, setDentists] = useState([]);
  const [favs, setFavs] = useState(lsFavs);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentists(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <DentistStates.Provider value={{ theme, setTheme, dentists, favs, setFavs }}>
      {children}
    </DentistStates.Provider>
  );
};
export default Context;

export const useDentistStates = () => useContext(DentistStates);
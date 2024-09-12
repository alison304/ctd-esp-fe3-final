import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

const DentistStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  dentists: [],
  favs: lsFavs,
  theme: true,
}

const Context = ({ children }) => {
  // const [theme, setTheme] = useState();
  // const [dentists, setDentists] = useState([]);
  // const [favs, setFavs] = useState(lsFavs);
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      // setDentists(res.data);
      dispatch({type: "GET_DENTISTS", payload:res.data})
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <DentistStates.Provider value={{ state, dispatch }}>
      {children}
    </DentistStates.Provider>
  );
};
export default Context;

export const useDentistStates = () => useContext(DentistStates);
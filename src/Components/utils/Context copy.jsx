import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";

//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

const DentistStates = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART": //Lo dejo de tarea (utilizar el método .filter())
      return { ...state, cart: [] };
  }
};
const initialState = {
  cart: [],
  recipes: [],
};

const Context = ({ children }) => {
  // Reemplazamos estos estados en un único useReducer
  // const [cart, setCart] = useState([]);
  // const [recipes, setRecipes] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const url =
    "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data.recipes);
      // setRecipes(res.data.recipes);
      dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
    });
  }, []);

  return (
    <DentistStates.Provider value={{ state, dispatch }}>
      {children}
    </DentistStates.Provider>
  );
};
export default Context;

export const useDentistStates = () => useContext(DentistStates);

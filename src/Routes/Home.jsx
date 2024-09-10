import Card from '../Components/Card';
import { useDentistStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const titleStyle = {
  color: "#156",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const { dentists } = useDentistStates();

  return (
    <>
      <h1 style={titleStyle}>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Home

import './App.css';
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import "./styles/styles.css";

//react practice from this youtube tutorial https://www.youtube.com/watch?v=HhtqSwUgP1U&ab_channel=EDteam

function App() {
  return (
    <main>
      <Provider store ={store}>
        <h1>My game</h1>
        <Jugadores />
        <EquipoSeleccionado />
        
      </Provider>
    </main>
  );
}

export default App;

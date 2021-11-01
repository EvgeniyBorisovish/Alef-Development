
import './App.css';
import AppRouter from './components/AppRouter';
import Basement from './components/Basement';
import NavBar from './components/NavBar';
import { Context } from "./Context.js";
import useChildren from './hooks/useChildren';
import useInput from './hooks/useInput';



function App() {
  
  const userNameHook = useInput('')

  const userAgeHook = useInput('')

  const childrenApiState = useChildren()

 

  return (
    <div className="layout">
    <NavBar/>
    <Context.Provider value={[userNameHook,userAgeHook,childrenApiState]}>
        <div className="layout-content">
          <AppRouter/>
        </div>
    </Context.Provider>
    <Basement/>
  </div>
  );
}

export default App;

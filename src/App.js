import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import  Ajout_cand from './components/ajout_candidat';
import  Displaycandidat from './components/list_user';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/add" exact render={(props) => <Ajout_cand {...props} />}></Route>
      <Route path="/list" exact render={(props) => <Displaycandidat {...props} />}></Route>
     </BrowserRouter>
    </div>
  );
}

export default App;

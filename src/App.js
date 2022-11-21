import Header from './Components/Header/Header';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Studentams from "./Pages/Studentams/Studentams"
import Verslui from "./Pages/Verslui/Verslui"
import Programos from "./Pages/Programos/Programos"
import Naujienos from "./Pages/Naujienos/Naujienos"

function App() {
  return (
    <>
      <div className="App">
        <Header>
          <h2>~~~kaip issimt per props.children~~~</h2>
        </Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Studentams' element={<Studentams/>}/>
          <Route path='/Verslui' element={<Verslui/>}/>
          <Route path='/Programos' element={<Programos/>}/>
          <Route path='/Apie mus' element={<h1>Apie mus</h1>}/>
          <Route path='/Naujienos' element={<Naujienos/>}/>
          <Route path='/IT testas' element={<h1>IT testas</h1>}/>
          <Route path='/Kontaktai' element={<h1>Kontaktai</h1>}/>
          <Route path='/EN' element={<h1>EN page</h1>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

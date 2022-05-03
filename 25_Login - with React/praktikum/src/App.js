import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/Home' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

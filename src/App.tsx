import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Container from 'react-bootstrap/Container';



import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import CarsPage from "./pages/CarsPage";

function App(): JSX.Element {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/users' element={<Users />} />
          <Route path='/cars' element={<CarsPage children={undefined} />} />
   
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
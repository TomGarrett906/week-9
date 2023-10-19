import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Container from 'react-bootstrap/Container';



import Dashboard from "./Components/Dashboard";


function App(): JSX.Element {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}/>

   
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
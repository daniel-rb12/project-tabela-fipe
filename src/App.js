import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Brands from './pages/Brands'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/brands' element={ <Brands /> } />
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Type from './pages/Type'
import './App.css';
import Brands from './pages/Brands';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/type' element={ <Type /> } />
      <Route path='/brands' element={ <Brands /> } />
    </Routes>
  );
}

export default App;

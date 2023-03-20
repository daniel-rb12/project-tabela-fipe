import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Type from './pages/Type'
import './App.css';
import Brands from './pages/Brands';
import Models from './pages/Models';
import Years from './pages/Years';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/type' element={ <Type /> } />
      <Route path='/brands' element={ <Brands /> } />
      <Route path='/models' element={ <Models /> } />
      <Route path='/years' element={ <Years /> } />
    </Routes>
  );
}

export default App;

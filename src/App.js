import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Type from './pages/Type'
import Brands from './pages/Brands';
import Models from './pages/Models';
import Years from './pages/Years';
import Infos from './pages/Infos';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/type' element={ <Type /> } />
      <Route path='/brands' element={ <Brands /> } />
      <Route path='/models' element={ <Models /> } />
      <Route path='/years' element={ <Years /> } />
      <Route path='/infos' element={ <Infos /> } />
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Type from './pages/Type'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/type' element={ <Type /> } />
    </Routes>
  );
}

export default App;

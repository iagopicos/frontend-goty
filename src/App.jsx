import './App.css';
import Home from './components/pages/Home';
import Navigation from './components/navigation/Navigation';
import NomineesPage from './components/games/NomineesPage';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
 
    <main className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nominees' element={<NomineesPage/>}/>
      </Routes>
    </main>
  );
}

export default App;

import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navigation from './Navbar';
import Home from './components/home'
import Consult from './components/consult';
import TalkingArea from './components/talkingArea';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Consult' element={<Consult />} />
        <Route path='/Talking_Area' element={<TalkingArea />} />
      </Routes>
    </div>
  );
}

export default App;

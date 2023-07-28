import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navigation from './Navbar';
import Home from './components/home'
import About from './components/About';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break;
    case "/link":
      Component = <About />
      break;
    default:
      break;
  }
  return (
    <div className="App">
      <Navigation />
      {Component}
    </div>
  );
}

export default App;

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
import { Helmet } from "react-helmet";

const TITLE = 'My Page Title';

function App() {

  return (
    <div className="App">

      <title>{TITLE}</title>
      <SignupForm />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Consult' element={<Consult />} />
        <Route path='/Talking_Area' element={<TalkingArea />} />
      </Routes>
    </div>
  );
}


export const SignupForm = () => {
  return (
    < Helmet>
      <meta charSet="utf-8" />
      <title>TellYourStory</title>
      <link rel="canonical" href="http://www.learnbestcoding.com" />
    </Helmet>
  )
}

export default App;

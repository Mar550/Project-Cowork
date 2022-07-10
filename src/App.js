import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Listing from './pages/Listing';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Inner from './components/Inner';
import Contact from './pages/Contact';
import Space from './pages/Space'
import PopupLogin from './components/PopupLogin';


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          
        </Route>
        <Route path ='/about' element={<About/>}>
        </Route>

        <Route path ='/listing' element={<Listing/>}>
        </Route>

        <Route path ='/profile' element={<Profile/>}>
        </Route>

        <Route path ='/contact' element={<Contact/>}>
        </Route>

        <Route path ='/login' element={<PopupLogin/>}>
        </Route>

        <Route path ='/register' element={<Register/>}>
        </Route>

        <Route path ='/space' element={<Space/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

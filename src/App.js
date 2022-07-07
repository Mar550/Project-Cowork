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


function App() {

  return (
    <div id="root">
      <Header/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

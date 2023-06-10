import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Product from './Product';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Header/>
     <Product/>
     <Footer/>
    </div>
  );
}

export default App;

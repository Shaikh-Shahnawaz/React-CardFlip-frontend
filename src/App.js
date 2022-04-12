import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Liked from './components/Liked.jsx'

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/liked" element={<Liked/>} />
          {/* <Route exact path="/cart" element={<CartItem/>} />
          <Route exact path='/productDetail' element={<ProductDetail/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;

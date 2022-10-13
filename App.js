import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ProductListing />
        <Routes>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

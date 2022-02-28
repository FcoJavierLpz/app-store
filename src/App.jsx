import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

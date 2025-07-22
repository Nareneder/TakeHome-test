import React, { useState, useEffect } from 'react';
import products from './product-data';
import ProductCard from './components/ProductCard';
import CompareBar from './components/CompareBar';
import ComparisonView from './components/ComparisonView';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [compareList, setCompareList] = useState(
    JSON.parse(localStorage.getItem('compareList')) || []
  );
  const [showComparison, setShowComparison] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  );

  useEffect(() => {
    localStorage.setItem('compareList', JSON.stringify(compareList));
  }, [compareList]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleCompare = (product) => {
    if (compareList.find(p => p.id === product.id)) {
      setCompareList(compareList.filter(p => p.id !== product.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  const clearCompare = () => {
    setCompareList([]);
    setShowComparison(false);
  };

  const removeFromCompare = (id) => {
    setCompareList(compareList.filter(p => p.id !== id));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container py-4">
        <h1 className="mb-4 text-center">Compare Phones</h1>

        <div className="form-check form-switch mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </label>
        </div>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="row g-4" style={{marginBottom:"100px"}}>
          {filteredProducts.length > 0 ?  (
            filteredProducts.map(product => (
              <div key={product.id} className="col-sm-3 col-md-3 col-lg-2">
                <ProductCard
                  product={product}
                  isSelected={!!compareList.find(p => p.id === product.id)}
                  onToggle={toggleCompare}
                />
              </div>
            ))
          ):(
            <h5>No result found!</h5>
          )}
        </div>

        <CompareBar
          compareList={compareList}
          onCompare={() => setShowComparison(true)}
          onClear={clearCompare}
          onRemove={removeFromCompare}
        />

        {showComparison && (
          <ComparisonView
            compareList={compareList}
            onClose={() => setShowComparison(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
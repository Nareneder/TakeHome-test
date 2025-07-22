import React from 'react';

const ProductCard = ({ product, isSelected, onToggle }) => {
  return (
    <div className={`card h-100 ${isSelected ? 'border-primary' : ''}`}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.brand}</p>
        <p className="card-text fw-bold">${product.price}</p>
        <ul className="list-unstyled small">
          {product.features.map((f, i) => <li key={i}>• {f}</li>)}
        </ul>
        <button
          className={`btn mt-auto ${isSelected ? 'btn-outline-danger' : 'btn-outline-primary'}`}
          onClick={() => onToggle(product)}
        >
          {isSelected ? 'Remove' : 'Add to Compare'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
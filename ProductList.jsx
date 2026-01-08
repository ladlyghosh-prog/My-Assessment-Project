import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    { name: 'Snake Plant', cost: '$15', image: 'https://example.com/snake.jpg' },
    { name: 'Aloe Vera', cost: '$10', image: 'https://example.com/aloe.jpg' },
    { name: 'Peace Lily', cost: '$20', image: 'https://example.com/lily.jpg' }
  ];

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      <div className="plant-grid">
        {plants.map((plant, index) => (
          <div key={index} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.cost}</p>
            <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

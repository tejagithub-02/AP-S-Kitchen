import React from 'react';
import './Mango.css';

const products = [
  {
    id: 1,
    name: 'Tomato Thokku',
    image: '/images/1.jpeg',
    rating: 4.8,
    reviews: 321,
    priceOld: 320,
    priceNew: 220,
  },
  {
    id: 2,
    name: 'Uppu Tomato',
    image: '/images/2.jpeg',
    rating: 4.7,
    reviews: 289,
    priceOld: 280,
    priceNew: 190,
  },
  {
    id: 3,
    name: 'Menthe Tomato',
    image: '/images/3.jpeg',
    rating: 4.6,
    reviews: 198,
    priceOld: 300,
    priceNew: 210,
  },
  {
    id: 4,
    name: 'Tomato Chutney Pickle',
    image: '/images/4.jpeg',
    rating: 4.5,
    reviews: 156,
    priceOld: 250,
    priceNew: 180,
  },
  {
    id: 5,
    name: 'Garlic Tomato Pickle',
    image: '/images/5.jpeg',
    rating: 4.4,
    reviews: 201,
    priceOld: 280,
    priceNew: 200,
  },
];

const Mango = () => {
  return (
    <div className="sliding-container1">
     
      <h3 className="heading">Tomato Pickles</h3>
      <div className="scroll-row">
        {products.map((product, index) => (
          <div
            className="product-slide-card animate-card"
            style={{ animationDelay: `${index * 0.2}s` }}
            key={product.id}
          >
            <img src={product.image} alt={product.name} className="slide-image" />
            <h3 className="slide-title">{product.name}</h3>
            <div className="rating-row">
              <span className="rating">⭐ {product.rating}</span>
              <span className="reviews">({product.reviews})</span>
            </div>
            <div className="slide-price">
              <span className="old">₹{product.priceOld}</span>
              <span className="new">₹{product.priceNew}</span>
            </div>
            <a
              className="slide-button"
              href={`https://wa.me/917022947654?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Shop 🛒
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mango;
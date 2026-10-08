import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const bannerImages = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.png',
    '/images/img6.png',
    '/images/img3.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const products = [
    { id: 1, name: '22K Royal Gold Necklace', price: '₹ 1,89,900', image: '/images/image1.webp' },
    { id: 2, name: 'Diamond Bridal Ring Set', price: '₹ 1,49,999', image: '/images/image2.webp' },
    { id: 3, name: 'Traditional Gold Bangle', price: '₹ 1,11,999', image: '/images/image4.webp' },
    { id: 4, name: 'Solitaire Diamond Earrings', price: '₹ 85,000', image: '/images/image7.webp' },
    { id: 5, name: 'Antique Gold Jhumka', price: '₹ 65,500', image: '/images/image5.webp' },
    { id: 6, name: 'Platinum Couple Rings', price: '₹ 95,000', image: '/images/image6.webp' },
  ];

  return (
    <div className="dashboard-container">
      <section className="banner-slider">
        <button className="slider-arrow left-arrow" onClick={prevSlide}>&#10094;</button>
        <div className="slide-content">
          <img 
            src={bannerImages[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`} 
            className="slider-img"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/900x400/3d251e/ffffff?text=Jewellery+Banner+Slide";
            }}
          />
        </div>
        <button className="slider-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
      </section>

      <h2 className="section-title">Featured Jewellery & Gold Deals</h2>

      <section className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-wrapper">
              <img 
                src={product.image} 
                alt={product.name} 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/200x200/ffffff/3d251e?text=Jewellery+Item";
                }}
              />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
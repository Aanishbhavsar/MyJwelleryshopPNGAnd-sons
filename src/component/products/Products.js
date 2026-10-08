import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  // 1. Array of Objects containing detailed product data
  const productsList = [
    {
      id: 1,
      title: "22K Antique Gold Royal Necklace",
      category: "Gold",
      price: "₹ 1,89,900",
      rating: "4.9 ★",
      purity: "22KT (916 Hallmarked)",
      weight: "32.50 Grams",
      description: "Crafted with intricate traditional heritage designs, ideal for grand weddings and cultural occasions.",
      image: "/images/imgpro1.webp"
    },
    {
      id: 2,
      title: "Solitaire Diamond Engagement Ring",
      category: "Diamond",
      price: "₹ 1,49,999",
      rating: "4.8 ★",
      purity: "VVS-EF Certified Diamond",
      weight: "4.20 Grams (18KT Gold)",
      description: "A brilliant cut solitaire diamond embedded on an elegant platinum-gold hybrid band.",
      image: "/images/imgpro2.webp"
    },
    {
      id: 3,
      title: "Traditional Designer Gold Bangles (Pair)",
      category: "Gold",
      price: "₹ 1,11,999",
      rating: "4.7 ★",
      purity: "22KT Hallmarked Gold",
      weight: "24.10 Grams",
      description: "Classic Indian filigree artwork handcrafted by master artisans for timeless elegance.",
      image: "/images/imgpro7.jpg"
    },
    {
      id: 4,
      title: "Royal Ruby & Diamond Earrings",
      category: "Diamond",
      price: "₹ 85,000",
      rating: "4.9 ★",
      purity: "18KT Gold + Real Rubies",
      weight: "8.50 Grams",
      description: "Stunning ruby gemstone surrounded by brilliant-cut diamonds, perfect for festive celebrations.",
      image: "/images/imgpro8.jpg"
    },
    {
      id: 5,
      title: "Authentic Pure Silver Pooja Thali Set",
      category: "Silver",
      price: "₹ 28,500",
      rating: "4.6 ★",
      purity: "999 Pure Fine Silver",
      weight: "350.0 Grams",
      description: "Exquisitely engraved silver thali set including diya, agarbatti stand, and bell for auspicious rituals.",
      image: "/images/imgpro5.jpg"
    },
    {
      id: 6,
      title: "Men's Solid Platinum & Gold Band",
      category: "Platinum",
      price: "₹ 95,000",
      rating: "4.8 ★",
      purity: "950 Platinum + 18KT Gold",
      weight: "12.0 Grams",
      description: "Sleek and masculine modern design tailored for contemporary everyday luxury.",
      image: "/images/imgpro6.jpg"
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="products-container" id="products-section">
      <div className="products-header">
        <h2>Exclusive Jewellery Collections</h2>
        <p>Discover hand-crafted purity and heirloom craftsmanship</p>
      </div>

      {/* Grid of Products */}
      <div className="products-grid">
        {productsList.map((item) => (
          <div key={item.id} className="product-card">
            <div className="badge">{item.category}</div>
            <div className="img-box">
              <img 
                src={item.image} 
                alt={item.title} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/250x250/3d251e/ffffff?text=" + encodeURIComponent(item.category);
                }} 
              />
            </div>
            <div className="card-details">
              <h3>{item.title}</h3>
              <p className="card-purity">Purity: {item.purity}</p>
              <div className="card-price-row">
                <span className="price">{item.price}</span>
                <span className="rating">{item.rating}</span>
              </div>
              <button 
                className="view-btn"
                onClick={() => setSelectedProduct(item)}
              >
                View Full Details ➔
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div className="modal-body">
              <div className="modal-img-box">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/350x350/3d251e/ffffff?text=Jewellery";
                  }}
                />
              </div>

              <div className="modal-info">
                <span className="modal-category">{selectedProduct.category} Collection</span>
                <h2>{selectedProduct.title}</h2>
                <div className="modal-price">{selectedProduct.price}</div>
                
                <div className="product-specs">
                  <p><strong>Purity Grade:</strong> {selectedProduct.purity}</p>
                  <p><strong>Approx Weight:</strong> {selectedProduct.weight}</p>
                  <p><strong>Customer Rating:</strong> {selectedProduct.rating}</p>
                </div>

                <p className="modal-desc">{selectedProduct.description}</p>

                <div className="modal-actions">
                  <button className="btn-buy">Inquire / Book Now</button>
                  <button className="btn-close" onClick={() => setSelectedProduct(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
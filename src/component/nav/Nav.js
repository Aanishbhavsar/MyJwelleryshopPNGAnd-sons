


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Nav.css';

// const Nav = () => {
//   return (
//     <nav className="custom-nav">
//       {/* Top Border Line */}
//       <div className="nav-top-border"></div>

//       <div className="nav-container">
//         {/* Logo Section */}
//         <div className="nav-logo-section">
//           <Link to="/">
//             <img 
//               src="/images/logo.png" 
//               alt="P. N. GADGIL & SONS" 
//               className="nav-logo" 
//             />
//           </Link>
//           <div className="nav-subtext">
//             Gold <span>|</span> Silver <span>|</span> Diamonds
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="nav-links-wrapper">
//           <Link to="/" className="nav-link active">HOME</Link>
//           <Link to="/enquiry" className="nav-link">ENQUIRY</Link>

//           {/* Products Link */}
//           <div className="nav-dropdown">
//             <Link to="/products" className="nav-link">
//               PRODUCTS 
//             </Link>
//           </div>

//           <Link to="/showrooms" className="nav-link">OUR SHOWROOMS</Link>


//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;



import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="custom-nav">
      {/* Top Border Line */}
      <div className="nav-top-border"></div>

      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo-section">
          <Link to="/">
            <img 
              src="/images/logo.png" 
              alt="P. N. GADGIL & SONS" 
              className="nav-logo" 
            />
          </Link>
          <div className="nav-subtext">
            Gold <span>|</span> Silver <span>|</span> Diamonds
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links-wrapper">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/enquiry" className="nav-link">ENQUIRY</Link>

          {/* Products Link */}
          <div className="nav-dropdown">
            <Link to="/products" className="nav-link">
              PRODUCTS 
            </Link>
          </div>

          <Link to="/our-showrooms" className="nav-link">OUR SHOWROOMS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
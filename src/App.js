// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Nav from './component/nav/Nav';
// import Dashboard from './component/dashboard/Dashboard';
// import Products from './component/products/Products';
// import FooterComp from './component/footer/Footer';
// import Enquiry from './component/enquiry/Enquiry';
// import Showroom from './component/showroom/Showroom';

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/enquiry" element={<Enquiry />} />
//          <Route path="/our-showrooms" element={<Showroom/>} />
//       </Routes>
//       <FooterComp />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/nav/Nav';
import Dashboard from './component/dashboard/Dashboard';
import Products from './component/products/Products';
import Enquiry from './component/enquiry/Enquiry';
import Showroom from './component/showroom/Showroom';
import FooterComp from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/our-showrooms" element={<Showroom />} />
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;
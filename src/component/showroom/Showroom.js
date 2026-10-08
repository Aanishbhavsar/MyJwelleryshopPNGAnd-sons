// import React, { useState } from 'react';
// import './Showroom.css';

// const storeData = [
//   {
//     id: 1,
//     name: 'Amanora Mall (Pune)',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Amanora Mall, Amanora Park, Unit No. WB-GF-22, Ground floor, West Block, Hadapsar, Pune, Maharashtra 411028',
//     phone: '8956522683',
//     timings: '11:00 AM to 9:30 PM',
//     closedDay: ''
//   },
//   {
//     id: 2,
//     name: 'Amravati',
//     state: 'Maharashtra',
//     city: 'Amravati',
//     address: 'J. K. Towers, S. No. 35 Plot No. 56/2, Opp. Raja Peth Police Station, Amravati 444605',
//     phone: '7719840022',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Wednesday Closed'
//   },
//   {
//     id: 3,
//     name: 'Aundh(Pune)',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Westend center 1, Next to Reliance Mart, Aundh, Pune – 411007',
//     phone: '7774017871',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 4,
//     name: 'Badalapur',
//     state: 'Maharashtra',
//     city: 'Badlapur',
//     address: 'Ground Floor, Shop No 1 to 4, Sr No 15, Lotus Apartment, Near HDFC Bank, Katrap, Badalapur 421503',
//     phone: '9890543889',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 5,
//     name: 'Beed',
//     state: 'Maharashtra',
//     city: 'Beed',
//     address: 'S No.1754/1, Prakash Heights Subhash Road, Beed – 431122',
//     phone: '7888035661',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Wednesday Closed'
//   },
//   {
//     id: 6,
//     name: 'Bhosari (Pune)',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'K.B.G Classic, Next to Rupee bank , Pune Nashik Road, Near Flyover, Bhosari- 411039',
//     phone: '8380044369',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday closed'
//   },
//   {
//     id: 7,
//     name: 'Chinchwad (PCMC)',
//     state: 'Maharashtra',
//     city: 'PCMC',
//     address: '1/1, Gokhale Vrindavan, Chapekar Chowk, Chinchwad, Pune – 411033',
//     phone: '9689928697',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 8,
//     name: 'Dharashiv (Osmanabad)',
//     state: 'Maharashtra',
//     city: 'Dharashiv',
//     address: 'Sun & Ocean Complex, Ram Nagar, Opp. Police Line, Osmanabad – 413501',
//     phone: '7887899871',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Tuesday Closed'
//   },
//   {
//     id: 9,
//     name: 'Dhule',
//     state: 'Maharashtra',
//     city: 'Dhule',
//     address: 'Bafna House, Lane No. 4, Parola Road, Dhule – 424001,',
//     phone: '9890543787',
//     timings: '10:30 am – 8:30 pm',
//     closedDay: 'Wednesday Closed'
//   },
//   {
//     id: 10,
//     name: 'Dombivli',
//     state: 'Maharashtra',
//     city: 'Dombivli',
//     address: 'Ground floor, Shop No 3, Laxmi Baug Estate, Near SVC Bank, Phadke Road, Dombivli East, Maharashtra 421201',
//     phone: '9112219797',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 11,
//     name: 'Happy Colony, Kothrud',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Lane No. 1, Happy Colony, Karve Road, Kothrud, Pune – 411038',
//     phone: '9890543772',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 12,
//     name: 'Jalgaon',
//     state: 'Maharashtra',
//     city: 'Jalgaon',
//     address: 'Near Bahinabai Garden, Ring Road, Jalgaon – 425001',
//     phone: '7447719415',
//     timings: '10:30 am – 8:30 pm',
//     closedDay: 'Wednesday Closed'
//   },
//   {
//     id: 13,
//     name: 'Kalaburagi (Gulbarga – Karnataka)',
//     state: 'Karnataka',
//     city: 'Kalaburagi',
//     address: 'City Center Mall, Near Jagat circle, Kalaburgi – 585101',
//     phone: '9890544088',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Wednesday Closed'
//   },
//   {
//     id: 14,
//     name: 'Laxmi Road (Pune)',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Saraswati Sadan, Survey No. 606, Laxmi Road, Sadashiv Peth, Pune – 411030',
//     phone: '9890543628',
//     timings: '10:30 AM to 9:00 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 15,
//     name: 'Mumbai',
//     state: 'Maharashtra',
//     city: 'Mumbai',
//     address: 'Near Ravindra Natya Mandir, Opp. Rachana Sansad College, Mumbai – 400025',
//     phone: '8600144481 / 8600144482',
//     timings: '11:00 am – 8:00 pm',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 16,
//     name: 'Nandurbar',
//     state: 'Maharashtra',
//     city: 'Nandurbar',
//     address: 'Raghuvanshi Complex, Pardeshipura, Nandurbar: 425412',
//     phone: '7028886950',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Sunday Closed'
//   },
//   {
//     id: 17,
//     name: 'Narayangaon',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'City Sr.No. 1655/2, Near IDBI Bank, Anandwadi, Tal. Junnar, Dist. Pune 410504',
//     phone: '7887899869',
//     timings: '10:30 AM to 8:00 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 18,
//     name: 'Nashik',
//     state: 'Maharashtra',
//     city: 'Nashik',
//     address: 'Agora Complex, Canada Corner, Nashik – 422002',
//     phone: '8975756550',
//     timings: '10:30 AM to 9:00 PM',
//     closedDay: 'Tuesday Closed'
//   },
//   {
//     id: 19,
//     name: 'Nashik Road',
//     state: 'Maharashtra',
//     city: 'Nashik',
//     address: 'Star Zone Mall, Shikharewadi, Near Passport Office, Nashik Road 422214.',
//     phone: '9850305641',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 20,
//     name: 'Pandharpur',
//     state: 'Maharashtra',
//     city: 'Pandharpur',
//     address: 'Rajlaxmi Market, Station Road, Pandharpur – 4133 04',
//     phone: '7028511832',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 21,
//     name: 'Parbhani',
//     state: 'Maharashtra',
//     city: 'Parbhani',
//     address: 'Maheshwari Building, Near RR Petrol Pump, Basmat Road, Parbhani – 431401',
//     phone: '8669603178',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 22,
//     name: 'Phaltan',
//     state: 'Maharashtra',
//     city: 'Satara',
//     address: 'Shop No 1, Ground floor, Pushp Complex, Plot No 47 / 48, City Sr No 6483 A/B, Opposite Namjoshi Petrol Pump, Laxmi Nagar, Ring Road, Vilage – Phaltan 415523 Dist. – Satara',
//     phone: '7796699989',
//     timings: '10:30 AM to 8:00 PM',
//     closedDay: 'Saturday Closed'
//   },
//   {
//     id: 23,
//     name: 'Sangamner',
//     state: 'Maharashtra',
//     city: 'Sangamner',
//     address: 'New Nagar Road, Sangamner – 422605',
//     phone: '7030400417',
//     timings: '10:30 AM to 8:00 PM',
//     closedDay: 'Tuesday closed'
//   },
//   {
//     id: 24,
//     name: 'Satara',
//     state: 'Maharashtra',
//     city: 'Satara',
//     address: 'Marwadi Chowk, Near Rajwada, New English School Road, Bhavani Peth, Satara – 415002',
//     phone: '8956968558',
//     timings: '10:30 AM to 9:00 PM',
//     closedDay: 'Saturday Closed'
//   },
//   {
//     id: 25,
//     name: 'Satara Road (Pune)',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Mudra, Opposite to D-Mart, Main Satara road, Pune – 411009',
//     phone: '8380044374',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 26,
//     name: 'Shirdi',
//     state: 'Maharashtra',
//     city: 'Ahilyanagar',
//     address: 'Ground Floor, Hotel Matoshree, 169/5, Shivaji Nagar, Shirdi, Taluka – Rahata, Dist – Ahilyanagar, 423109',
//     phone: '8605192146',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Tuesday Closed'
//   },
//   {
//     id: 27,
//     name: 'Shirur',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Revenue Colony, Next to Sharad Bank, Tal. Shirur, Dist. Pune Shirur : 412210',
//     phone: '7030400416',
//     timings: '10:30 AM to 8:00 PM',
//     closedDay: 'Wednesday Closed'
//   },
//   {
//     id: 28,
//     name: 'Sinhagad Road (Pune)',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Abhiruchi Mall, 2nd floor, Sinhagad Road, Vadgaon Bk Pune – 411041',
//     phone: '8380044373',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 29,
//     name: 'Solapur',
//     state: 'Maharashtra',
//     city: 'Solapur',
//     address: 'Dufferin Chowk, Solapur – 413002',
//     phone: '9890543633',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday closed'
//   },
//   {
//     id: 30,
//     name: 'Talegaon Dabhade (Pune)',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Bhegade Business Center, Maruti Mandir Road, Panchvati Colony, Maval, Tukaram Nagar, Talegaon Dabhade, Pune-410507',
//     phone: '9890543902',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Monday closed'
//   },
//   {
//     id: 31,
//     name: 'Thane',
//     state: 'Maharashtra',
//     city: 'Thane',
//     address: 'Srushti Prime, Gokhale road, Thane – 400602',
//     phone: '9890544094',
//     timings: '11:00 AM to 9:00 PM',
//     closedDay: 'Monday closed'
//   },
//   {
//     id: 32,
//     name: 'Tribeca NIBM',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Shop. no. G 01, NIBM Post Office Rd, next to The Ark, Autadwadi Handewadi, Mahadev Wadi, Kondhwa, Pune, Maharashtra 411048',
//     phone: '9561115908',
//     timings: '11:00 AM to 9:30 PM',
//     closedDay: ''
//   },
//   {
//     id: 33,
//     name: 'Vadodara (Gujarat)',
//     state: 'Gujarat',
//     city: 'Vadodara',
//     address: 'Trisha Square, Near Chikuwadi, Jetalpur Road, Alkapuri, Vadodara – 390005',
//     phone: '7887899873',
//     timings: '11 am – 8:30 pm',
//     closedDay: 'Monday Closed'
//   },
//   {
//     id: 34,
//     name: 'VimanNagar',
//     state: 'Maharashtra',
//     city: 'Pune',
//     address: 'Phoenix Mall, GP 28, Lower Ground Floor, Clover Park, Viman Nagar, Pune 411014',
//     phone: '9172224085',
//     timings: '11:00 AM to 9:30 PM',
//     closedDay: ''
//   },
//   {
//     id: 35,
//     name: 'Wardha',
//     state: 'Maharashtra',
//     city: 'Wardha',
//     address: 'Dhablia Bhuvan, Ingole chowk, Near Ganesh Mandir, Main Road, Wardha – 442001',
//     phone: '7887899868',
//     timings: '11:00 AM to 8:30 PM',
//     closedDay: 'Friday Closed'
//   }
// ];

// const Showroom = () => {
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   // Extract unique states and cities
//   const states = [...new Set(storeData.map((store) => store.state))];
  
//   const availableCities = selectedState
//     ? [...new Set(storeData.filter((s) => s.state === selectedState).map((s) => s.city))]
//     : [...new Set(storeData.map((s) => s.city))];

//   // Filter stores
//   const filteredStores = storeData.filter((store) => {
//     const matchesState = selectedState ? store.state === selectedState : true;
//     const matchesCity = selectedCity ? store.city === selectedCity : true;
//     return matchesState && matchesCity;
//   });

//   return (
//     <div className="showroom-container">
//       {/* Filters Header */}
//       <div className="filters-wrapper">
//         <div className="filter-box">
//           <label>Select State :</label>
//           <select 
//             value={selectedState} 
//             onChange={(e) => {
//               setSelectedState(e.target.value);
//               setSelectedCity('');
//             }}
//           >
//             <option value="">Choose State</option>
//             {states.map((st, i) => (
//               <option key={i} value={st}>{st}</option>
//             ))}
//           </select>
//         </div>

//         <div className="filter-box">
//           <label>Select City :</label>
//           <select 
//             value={selectedCity} 
//             onChange={(e) => setSelectedCity(e.target.value)}
//           >
//             <option value="">Choose City</option>
//             {availableCities.map((ct, i) => (
//               <option key={i} value={ct}>{ct}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Showroom Cards Grid */}
//       <div className="showroom-grid">
//         {filteredStores.map((store) => (
//           <div key={store.id} className="store-card">
//             <h3 className="store-title">{store.name}</h3>
//             <p className="store-address">{store.address}</p>
//             <p className="store-phone">Ph. No: {store.phone}</p>
//             <p className="store-hours">Store Hours: Timings : {store.timings}</p>
            
//             {store.closedDay && (
//               <p className="store-closed">{store.closedDay}</p>
//             )}

//             <button 
//               className="view-store-btn"
//               onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`, '_blank')}
//             >
//               - VIEW STORE
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Showroom;


import React, { useState } from 'react';
import './Showroom.css';

const storeData = [
  {
    id: 1,
    name: 'Amanora Mall (Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Amanora Mall, Amanora Park, Unit No. WB-GF-22, Ground floor, West Block, Hadapsar, Pune, Maharashtra 411028',
    phone: '8956522683',
    timings: '11:00 AM to 9:30 PM',
    closedDay: ''
  },
  {
    id: 2,
    name: 'Amravati',
    state: 'Maharashtra',
    city: 'Amravati',
    address: 'J. K. Towers, S. No. 35 Plot No. 56/2,Opp. Raja Peth Police Station, Amravati 444605',
    phone: '7719840022',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Wednesday Closed'
  },
  {
    id: 3,
    name: 'Aundh(Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Westend center 1, Next to Reliance Mart, Aundh, Pune – 411007',
    phone: '7774017871',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 4,
    name: 'Badalapur',
    state: 'Maharashtra',
    city: 'Badlapur',
    address: 'Ground Floor, Shop No 1 to 4, Sr No 15, Lotus Apartment, Near HDFC Bank, Katrap, Badalapur 421503',
    phone: '9890543889',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 5,
    name: 'Beed',
    state: 'Maharashtra',
    city: 'Beed',
    address: 'S No.1754/1, Prakash Heights Subhash Road, Beed – 431122',
    phone: '7888035661',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Wednesday Closed'
  },
  {
    id: 6,
    name: 'Bhosari (Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'K.B.G Classic, Next to Rupee bank , Pune Nashik Road, Near Flyover, Bhosari- 411039',
    phone: '8380044369',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday closed'
  },
  {
    id: 7,
    name: 'Chinchwad (PCMC)',
    state: 'Maharashtra',
    city: 'PCMC',
    address: '1/1, Gokhale Vrindavan, Chapekar Chowk, Chinchwad, Pune – 411033',
    phone: '9689928697',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 8,
    name: 'Dharashiv (Osmanabad)',
    state: 'Maharashtra',
    city: 'Dharashiv',
    address: 'Sun & Ocean Complex, Ram Nagar, Opp. Police Line, Osmanabad – 413501',
    phone: '7887899871',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Tuesday Closed'
  },
  {
    id: 9,
    name: 'Dhule',
    state: 'Maharashtra',
    city: 'Dhule',
    address: 'Bafna House, Lane No. 4, Parola Road, Dhule – 424001,',
    phone: '9890543787',
    timings: '10:30 am – 8:30 pm',
    closedDay: 'Wednesday Closed'
  },
  {
    id: 10,
    name: 'Dombivli',
    state: 'Maharashtra',
    city: 'Dombivli',
    address: 'Ground floor, Shop No 3, Laxmi Baug Estate, Near SVC Bank, Phadke Road, Dombivli East, Maharashtra 421201',
    phone: '9112219797',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 11,
    name: 'Happy Colony, Kothrud',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Lane No. 1, Happy Colony, Karve Road, Kothrud, Pune – 411038',
    phone: '9890543772',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 12,
    name: 'Jalgaon',
    state: 'Maharashtra',
    city: 'Jalgaon',
    address: 'Near Bahinabai Garden, Ring Road, Jalgaon – 425001',
    phone: '7447719415',
    timings: '10:30 am – 8:30 pm',
    closedDay: 'Wednesday Closed'
  },
  {
    id: 13,
    name: 'Kalaburagi (Gulbarga – Karnataka)',
    state: 'Karnataka',
    city: 'Kalaburagi',
    address: 'City Center Mall, Near Jagat circle, Kalaburgi – 585101',
    phone: '9890544088',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Wednesday Closed'
  },
  {
    id: 14,
    name: 'Laxmi Road (Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Saraswati Sadan, Survey No. 606, Laxmi Road, Sadashiv Peth, Pune – 411030',
    phone: '9890543628',
    timings: '10:30 AM to 9:00 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 15,
    name: 'Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    address: 'Near Ravindra Natya Mandir, Opp. Rachana Sansad College, Mumbai – 400025',
    phone: '8600144481 / 8600144482',
    timings: '11:00 am – 8:00 pm',
    closedDay: 'Monday Closed'
  },
  {
    id: 16,
    name: 'Nandurbar',
    state: 'Maharashtra',
    city: 'Nandurbar',
    address: 'Raghuvanshi Complex, Pardeshipura, Nandurbar: 425412',
    phone: '7028886950',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Sunday Closed'
  },
  {
    id: 17,
    name: 'Narayangaon',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'City Sr.No. 1655/2, Near IDBI Bank, Anandwadi, Tal. Junnar, Dist. Pune 410504',
    phone: '7887899869',
    timings: '10:30 AM to 8:00 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 18,
    name: 'Nashik',
    state: 'Maharashtra',
    city: 'Nashik',
    address: 'Agora Complex, Canada Corner, Nashik – 422002',
    phone: '8975756550',
    timings: '10:30 AM to 9:00 PM',
    closedDay: 'Tuesday Closed'
  },
  {
    id: 19,
    name: 'Nashik Road',
    state: 'Maharashtra',
    city: 'Nashik',
    address: 'Star Zone Mall, Shikharewadi, Near Passport Office, Nashik Road 422214.',
    phone: '9850305641',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 20,
    name: 'Pandharpur',
    state: 'Maharashtra',
    city: 'Pandharpur',
    address: 'Rajlaxmi Market, Station Road, Pandharpur – 4133 04',
    phone: '7028511832',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 21,
    name: 'Parbhani',
    state: 'Maharashtra',
    city: 'Parbhani',
    address: 'Maheshwari Building, Near RR Petrol Pump, Basmat Road, Parbhani – 431401',
    phone: '8669603178',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 22,
    name: 'Phaltan',
    state: 'Maharashtra',
    city: 'Satara',
    address: 'Shop No 1, Ground floor, Pushp Complex, Plot No 47 / 48, City Sr No 6483 A/B, Opposite Namjoshi Petrol Pump, Laxmi Nagar, Ring Road, Vilage – Phaltan 415523 Dist. – Satara',
    phone: '7796699989',
    timings: '10:30 AM to 8:00 PM',
    closedDay: 'Saturday Closed'
  },
  {
    id: 23,
    name: 'Sangamner',
    state: 'Maharashtra',
    city: 'Sangamner',
    address: 'New Nagar Road, Sangamner – 422605',
    phone: '7030400417',
    timings: '10:30 AM to 8:00 PM',
    closedDay: 'Tuesday closed'
  },
  {
    id: 24,
    name: 'Satara',
    state: 'Maharashtra',
    city: 'Satara',
    address: 'Marwadi Chowk, Near Rajwada, New English School Road, Bhavani Peth, Satara – 415002',
    phone: '8956968558',
    timings: '10:30 AM to 9:00 PM',
    closedDay: 'Saturday Closed'
  },
  {
    id: 25,
    name: 'Satara Road (Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Mudra, Opposite to D-Mart, Main Satara road, Pune – 411009',
    phone: '8380044374',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 26,
    name: 'Shirdi',
    state: 'Maharashtra',
    city: 'Ahilyanagar',
    address: 'Ground Floor, Hotel Matoshree, 169/5, Shivaji Nagar, Shirdi, Taluka – Rahata, Dist – Ahilyanagar, 423109',
    phone: '8605192146',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Tuesday Closed'
  },
  {
    id: 27,
    name: 'Shirur',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Revenue Colony, Next to Sharad Bank, Tal. Shirur, Dist. Pune Shirur : 412210',
    phone: '7030400416',
    timings: '10:30 AM to 8:00 PM',
    closedDay: 'Wednesday Closed'
  },
  {
    id: 28,
    name: 'Sinhagad Road (Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Abhiruchi Mall, 2nd floor, Sinhagad Road, Vadgaon Bk Pune – 411041',
    phone: '8380044373',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday Closed'
  },
  {
    id: 29,
    name: 'Solapur',
    state: 'Maharashtra',
    city: 'Solapur',
    address: 'Dufferin Chowk, Solapur – 413002',
    phone: '9890543633',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday closed'
  },
  {
    id: 30,
    name: 'Talegaon Dabhade (Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Bhegade Business Center, Maruti Mandir Road, Panchvati Colony, Maval, Tukaram Nagar, Talegaon Dabhade, Pune-410507',
    phone: '9890543902',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Monday closed'
  },
  {
    id: 31,
    name: 'Thane',
    state: 'Maharashtra',
    city: 'Thane',
    address: 'Srushti Prime, Gokhale road, Thane – 400602',
    phone: '9890544094',
    timings: '11:00 AM to 9:00 PM',
    closedDay: 'Monday closed'
  },
  {
    id: 32,
    name: 'Tribeca NIBM',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Shop. no. G 01, NIBM Post Office Rd, next to The Ark, Autadwadi Handewadi, Mahadev Wadi, Kondhwa, Pune, Maharashtra 411048',
    phone: '9561115908',
    timings: '11:00 AM to 9:30 PM',
    closedDay: ''
  },
  {
    id: 33,
    name: 'Vadodara (Gujarat)',
    state: 'Gujarat',
    city: 'Vadodara',
    address: 'Trisha Square, Near Chikuwadi, Jetalpur Road, Alkapuri, Vadodara – 390005',
    phone: '7887899873',
    timings: '11 am – 8:30 pm',
    closedDay: 'Monday Closed'
  },
  {
    id: 34,
    name: 'VimanNagar',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Phoenix Mall, GP 28, Lower Ground Floor, Clover Park, Viman Nagar, Pune 411014',
    phone: '9172224085',
    timings: '11:00 AM to 9:30 PM',
    closedDay: ''
  },
  {
    id: 35,
    name: 'Wardha',
    state: 'Maharashtra',
    city: 'Wardha',
    address: 'Dhablia Bhuvan, Ingole chowk, Near Ganesh Mandir, Main Road, Wardha – 442001',
    phone: '7887899868',
    timings: '11:00 AM to 8:30 PM',
    closedDay: 'Friday Closed'
  }
];

const Showroom = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Extract unique states and cities
  const states = [...new Set(storeData.map((store) => store.state))];
  
  const availableCities = selectedState
    ? [...new Set(storeData.filter((s) => s.state === selectedState).map((s) => s.city))]
    : [...new Set(storeData.map((s) => s.city))];

  // Filter stores
  const filteredStores = storeData.filter((store) => {
    const matchesState = selectedState ? store.state === selectedState : true;
    const matchesCity = selectedCity ? store.city === selectedCity : true;
    return matchesState && matchesCity;
  });

  return (
    <div className="showroom-container">
      {/* Head Office Section */}
      <div className="head-office-card">
        <div className="head-office-info">
          <h2>Head Office</h2>
          <p className="office-address">
            Abhiruchi Mall, S. No. 59/1-C, Wadgaon (BK), Sinhagad Road,<br />
            Pune – 411041, Maharashtra.
          </p>
          <div className="office-details">
            <p><strong>Phone :</strong> 020-24612000 , 020-67520200</p>
            <p><strong>Call toll free :</strong> 1800 233 0888</p>
            <p><strong>Email id :</strong> <a href="mailto:info@pngsl.com">info@pngsl.com</a></p>
            <p><strong>Contact :</strong> <a href="mailto:contact@pngsl.com">contact@pngsl.com</a></p>
            <p><strong>Send Resume :</strong> <a href="mailto:career@pngsl.com">career@pngsl.com</a></p>
          </div>
        </div>

        <div className="head-office-map">
          <iframe
            title="Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.382890538964!2d73.81881517596007!3d18.466312982618606!2m3!100!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295326f5fffff%3A0x868bbbf6669fb2bd!2sAbhiruchi%20Mall%20%26%20Multiplex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <hr className="divider-line" />

      {/* Filters Header */}
      <div className="filters-wrapper">
        <div className="filter-box">
          <label>Select State :</label>
          <select 
            value={selectedState} 
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity('');
            }}
          >
            <option value="">Choose State</option>
            {states.map((st, i) => (
              <option key={i} value={st}>{st}</option>
            ))}
          </select>
        </div>

        <div className="filter-box">
          <label>Select City :</label>
          <select 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Choose City</option>
            {availableCities.map((ct, i) => (
              <option key={i} value={ct}>{ct}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Showroom Cards Grid */}
      <div className="showroom-grid">
        {filteredStores.map((store) => (
          <div key={store.id} className="store-card">
            <h3 className="store-title">{store.name}</h3>
            <p className="store-address">{store.address}</p>
            <p className="store-phone">Ph. No: {store.phone}</p>
            <p className="store-hours">Store Hours: Timings : {store.timings}</p>
            
            {store.closedDay && (
              <p className="store-closed">{store.closedDay}</p>
            )}

            <button 
              className="view-store-btn"
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`, '_blank')}
            >
              - VIEW STORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showroom;
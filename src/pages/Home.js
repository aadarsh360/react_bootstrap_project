
// import React, { useState } from "react";

// function App() {
//   const [show, setShow] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Data for items and corresponding messages
//   const items = [
//     { id: 1, name: "Item 1", message: "This is the message for Item 1!" },
//     { id: 2, name: "Item 2", message: "Here is some information for Item 2." },
//     { id: 3, name: "Item 3", message: "Item 3 has its own unique message." },
//     { id: 4, name: "Item 4", message: "You selected Item 4. Cool stuff!" },
//   ];

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       {/* Hoverable Text */}
//       <div
//         className="position-relative"
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//         style={{ display: "inline-block" }}
//       >
//         {/* Hover Text */}
//         <span
//           className="text-primary fw-bold"
//           style={{
//             cursor: "pointer",
//             fontSize: "18px",
//           }}
//         >
//           Hover over this text
//         </span>

//         {/* Message Box */}
//         {show && (
//           <div
//             className="position-absolute"
//             style={{
//               top: "100%", // Position below the text
//               left: "50%", // Center the box relative to text
//               transform: "translateX(-50%)", // Align it without shifting
//               marginTop: "10px", // Gap between text and box
//               zIndex: 1000,
//             }}
//           >
//             {/* Arrow */}
//             <div
//               style={{
//                 width: "0",
//                 height: "0",
//                 borderLeft: "10px solid transparent",
//                 borderRight: "10px solid transparent",
//                 borderBottom: "10px solid #6C63FF", // Match message box color
//                 margin: "0 auto",
//               }}
//             ></div>

//             {/* Message Content */}
//             <div className=""
//               style={{
//                 background: "linear-gradient(60deg, #0066ff, #8e44ad)", // Blue to Purple Gradient
//                 color: "#FFFFFF",
//                 display: "flex", // Flexbox for dividing into left and right
//                 padding: "15px",
//                 borderRadius: "10px",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 minWidth: "500px", // Ensure enough width
//                 border: "1px solid #A29BFE",
//               }}
//             >
//               {/* Left Side: 1 Column, Multiple Rows */}
//               <div
//                 style={{
//                   flex: "1",
//                   borderRight: "1px solid #A29BFE",
//                   paddingRight: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 {items.map((item) => (
//                   <p
//                     key={item.id}
//                     className="mb-1"
//                     style={{
//                       cursor: "pointer",
//                       fontWeight: selectedItem === item.id ? "bold" : "normal",
//                       color: selectedItem === item.id ? "#fff" : "#ccc",
//                       border: "2px solid transparent", // Default border (no color)
//                       padding: "10px",
//                       borderRadius: "5px",
//                       transition: "all 0.3s ease", // Smooth transition for border color
//                     }}
//                     onMouseEnter={() => setSelectedItem(item.id)}
//                     onMouseLeave={() => setSelectedItem(null)}
//                     // Adding gradient border on hover
//                     onMouseOver={(e) => {
//                       e.target.style.border = "2px solid #0066ff"; // Blue border
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.border = "2px solid transparent"; // Reset border
//                     }}
//                   >
//                     {item.name}
//                   </p>
//                 ))}
//               </div>

//               {/* Right Side: Dynamic Message */}
//               <div
//                 style={{
//                   flex: "2",
//                   paddingLeft: "10px",
//                   opacity: selectedItem ? 1 : 0, // Control visibility with opacity
//                   transition: "opacity 0.3s ease-in-out", // Smooth transition for opacity
//                 }}
//               >
//                 <h6 className="mb-2">{selectedItem ? "Selected Item Details" : "Hover an Item"}</h6>
//                 <p className="mb-0">
//                   {selectedItem
//                     ? items.find((item) => item.id === selectedItem).message
//                     : "Hover over an item on the left to see its message."}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [show, setShow] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Data for items and corresponding messages
//   const items = [
//     { id: 1, name: "Item 1", message: "This is the message for Item 1!" },
//     { id: 2, name: "Item 2", message: "Here is some information for Item 2." },
//     { id: 3, name: "Item 3", message: "Item 3 has its own unique message." },
//     { id: 4, name: "Item 4", message: "You selected Item 4. Cool stuff!" },
//   ];

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       {/* Hoverable Text */}
//       <div
//         className="position-relative"
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//         style={{ display: "inline-block" }}
//       >
//         {/* Hover Text */}
//         <span
//           className=".text-primary text-danger fw-bold"
//           style={{
//             cursor: "pointer",
//             fontSize: "18px",
//           }}
//         >
//           Hover over this text
//         </span>

//         {/* Message Box */}
//         {show && (
//           <div
//             className="position-absolute"
//             style={{
//               top: "100%", // Position below the text
//               left: "50%", // Center the box relative to text
//               transform: "translateX(0%)", // Align it without shifting
//               marginTop: "10px", // Gap between text and box
//               zIndex: 1000,
//             }}
//           >
//             {/* Arrow */}
//             <div
//               style={{
//                 width: "0",
//                 height: "0",
//                 borderLeft: "10px solid transparent",
//                 borderRight: "10px solid transparent",
//                 borderBottom: "10px solid #6C63FF", // Match message box color
//                 margin: "0 auto",
//               }}
//             ></div>

//             {/* Message Content */}
//             <div
//               style={{
//                 backgroundColor: "#6C63FF",
//                 color: "#FFFFFF",
//                 display: "flex", // Flexbox for dividing into left and right
//                 padding: "15px",
//                 borderRadius: "10px",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 minWidth: "500px", // Ensure enough width
//                 border: "1px solid #A29BFE",
//               }}
//             >
//               {/* Left Side: 1 Column, Multiple Rows */}
//               <div
//                 style={{
//                   flex: "1",
//                   borderRight: "1px solid #A29BFE",
//                   paddingRight: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 {items.map((item) => (
//                   <p
//                     key={item.id}
//                     className="mb-1"
//                     style={{
//                       cursor: "pointer",
//                       fontWeight: selectedItem === item.id ? "bold" : "normal",
//                       color: selectedItem === item.id ? "#fff" : "#ccc",
//                     }}
//                     onMouseEnter={() => setSelectedItem(item.id)}
//                     onMouseLeave={() => setSelectedItem(null)}
//                   >
//                     {item.name}
//                   </p>
//                 ))}
//               </div>

//               {/* Right Side: Dynamic Message */}
//               <div
//                 style={{
//                   flex: "2",
//                   paddingLeft: "10px",
//                   opacity: selectedItem ? 1 : 0, // Control visibility with opacity
//                   transition: "opacity 0.3s ease-in-out", // Smooth transition for opacity
//                 }}
//               >
//                 <h6 className="mb-2">{selectedItem ? "Selected Item Details" : "Hover an Item"}</h6>
//                 <p className="mb-0">
//                   {selectedItem
//                     ? items.find((item) => item.id === selectedItem).message
//                     : "Hover over an item on the left to see its message."}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [show, setShow] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Data for items and corresponding messages
//   const items = [
//     { id: 1, name: "Item 1", message: "This is the message for Item 1!" },
//     { id: 2, name: "Item 2", message: "Here is some information for Item 2." },
//     { id: 3, name: "Item 3", message: "Item 3 has its own unique message." },
//     { id: 4, name: "Item 4", message: "You selected Item 4. Cool stuff!" },
//   ];

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       {/* Hoverable Text */}
//       <div
//         className="position-relative"
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//         style={{ display: "inline-block" }}
//       >
//         {/* Hover Text */}
//         <span
//           className="text-primary fw-bold"
//           style={{
//             cursor: "pointer",
//             fontSize: "18px",
//           }}
//         >
//           Hover over this text
//         </span>

//         {/* Message Box */}
//         {show && (
//           <div
//             className="position-absolute"
//             style={{
//               top: "100%", // Position below the text
//               left: "50%", // Center the box relative to text
//               transform: "translateX(0%)", // Align it without shifting
//               marginTop: "10px", // Gap between text and box
//               zIndex: 1000,
//             }}
//           >
//             {/* Arrow */}
//             <div
//               style={{
//                 width: "0",
//                 height: "0",
//                 borderLeft: "10px solid transparent",
//                 borderRight: "10px solid transparent",
//                 borderBottom: "10px solid #6C63FF", // Match message box color
//                 margin: "0 auto",
//               }}
//             ></div>

//             {/* Message Content */}
//             <div
//               style={{
//                 backgroundColor: "#6C63FF",
//                 color: "#FFFFFF",
//                 display: "flex", // Flexbox for dividing into left and right
//                 padding: "15px",
//                 borderRadius: "10px",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 minWidth: "300px", // Ensure enough width
//                 border: "1px solid #A29BFE",
//               }}
//             >
//               {/* Left Side: 1 Column, Multiple Rows */}
//               <div className=""
//                 style={{
//                   flex: "1",
//                   borderRight: "1px solid #A29BFE",
//                   paddingRight: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 {items.map((item) => (
//                   <p
//                     key={item.id}
//                     className="mb-1 text-primary"
//                     style={{
//                       cursor: "pointer",
//                       fontWeight: selectedItem === item.id ? "bold" : "normal",
//                       color: selectedItem === item.id ? "#fff" : "#ccc",
//                     }}
//                     onMouseEnter={() => setSelectedItem(item.id)}
//                     onMouseLeave={() => setSelectedItem(null)}
//                   >
//                     {item.name}
//                   </p>
//                 ))}
//               </div>

//               {/* Right Side: Dynamic Message */}
//               <div
//                 style={{
//                   flex: "2",
//                   paddingLeft: "10px",
//                 }}
//               >
//                 <h6 className="mb-2">{selectedItem ? "Selected Item Details" : "Hover an Item"}</h6>
//                 <p className="mb-0">
//                   {selectedItem
//                     ? items.find((item) => item.id === selectedItem)
//                       ? items.find((item) => item.id === selectedItem).message
//                       : "No message available"
//                     : "Hover over an item on the left to see its message."}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       {/* Text with hover */}
//       <div
//         className="position-relative"
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//         style={{ display: "inline-block" }}
//       >
//         {/* Hover Text */}
//         <span
//           className="text-primary fw-bold"
//           style={{
//             cursor: "pointer",
//             fontSize: "18px",
//           }}
//         >
//           Hover over this text
//         </span>

//         {/* Message Box */}
//         {show && (
//           <div
//             className="position-absolute"
//             style={{
//               top: "100%", // Position below the text
//               left: "50%", // Center the box relative to text
//               transform: "translateX(0%)", // Align center horizontally
//               marginTop: "10px", // Gap between text and box
//               zIndex: 1000,
//             }}
//           >
//             {/* Arrow */}
//             <div
//               style={{
//                 width: "0",
//                 height: "0",
//                 borderLeft: "10px solid transparent",
//                 borderRight: "10px solid transparent",
//                 borderBottom: "10px solid #6C63FF", // Match the message box color
//                 margin: "0 auto", // Center the arrow
//               }}
//             ></div>

//             {/* Message Content */}
//             <div
//               style={{
//                 backgroundColor: "#6C63FF", // Beautiful purple background
//                 color: "#FFFFFF", // White text for readability
//                 padding: "10px 15px", // Add internal padding
//                 borderRadius: "10px", // Rounded corners
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
//                 textAlign: "center",
//                 fontSize: "14px", // Clean font size
//                 border: "1px solid #A29BFE", // Subtle border for style
//               }}
//             >
//               ✨ This is a beautiful message box with an arrow! 🌟
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



import React from 'react'
import Navbar from '../components/Navbar'


function Home() {
  return (
    
    <div>
        <Navbar />
    <div className="container mt-5 ">
        
      <h1 className="text-primary">Welcome to My React App</h1>
      <button className="btn btn-success">Click Me</button>
    </div>


    </div>
  )
}

export default Home

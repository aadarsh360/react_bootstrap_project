
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
//               marginTop: "2px", // Gap between text and box
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
import Footer from '../components/Footer'
import HorizontalMove from '../components/HorizontalMove'
import Nitty_Gritty from '../components/Nitty_Gritty'


function Home() {
  return (

    <div>
      <Navbar />

      {/* <div className="container mt-5">
        
      <h1 className="text-primary ">Welcome to My React App</h1>
      <button className="btn btn-success">Click Me</button>
    </div> */}

      <div className="" >

        <div className=" d-flex justify-content-between container mt-5">

          <div className="mt-5 custom-dimensions ">
            <h2 className="mb-3">Build AI Cloud with InfraCloud AI Platform</h2>
            <p className="mb-4 text-gray medium-text">Build and operationalize a GPU Cloud in no time with InfraCloud AI platform. Offer various services to customers while efficiently using & scaling the GPU infrastructure from a dashboard. </p>
            <button className="btn bg-orange">Talk to AI Cloud Expert</button>

          </div>

          <div className=" custom-dimensions2 ">
            <img
              src="https://www.infracloud.io/assets/img/cloud-ai/ai-cloud-hero-image.svg"
              alt="Logo"
              className=""
            />
          </div>

        </div>
      </div>

      <HorizontalMove />


      <div className="container ">

        <div className="text-center mt-5">
          <h2 className="fw-bold">Accelerate Building AI Cloud</h2>
          <p className="text-gray">
            InfraCloud’s deep expertise in open source technologies and experience of operating cloud platforms<br></br>
            at scale is used to build the InfraCloud AI Platform.</p>
        </div>


        {/* first */}
        <div className=" p-3 mt-4">
          <div className="row">

            {/* Left Side */}
            <div className="col-7 ">
              <h4 className="mb-3">Sovereign AI Cloud with InfraCloud Platform</h4>
              <p className="text-gray">With advances in Gen AI, data privacy and security are more important than ever. With 137+ countries enacting some form of data protection and sovereignty laws, build AI cloud with data residency policies in place for data protection and privacy. With InfraCloud Sovereign AI Cloud, you can achieve digital sovereignty without stressing about all the operational complexity.</p>

              <div>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>InfraCloud AI platform enables building a Sovereign AI Cloud in a colo facility or your data center, so you can control where you locate your data and computing infrastructure.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Our platform follows the three aspects of sovereignty right from the start: data sovereignty, operational sovereignty, and software sovereignty.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Build AI infrastructure that ensures compliance with local regulations (like GDPR and Schrems II) and fulfills the transparency obligations.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Platform can burst into the public cloud for specific scale needs and communication with public AI systems while preserving the data residency policies.</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-5  text-end">
              <img
                src="https://www.infracloud.io/assets/img/cloud-ai/build-sovereign-ai-cloud-with-infracloud-platform.svg"
                alt="Sample Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>


        {/* second */}
        <div className=" p-3 mt-4">
          <div className="row">

            {/* Right Side */}
            <div className="col-5  text-start d-flex align-items-center">
              <img
                src="https://www.infracloud.io/assets/img/cloud-ai/infracloud-ai-bare-metal-platform.svg"
                alt="Sample Image"
                className="img-fluid"
              />
            </div>

            {/* Left Side */}
            <div className="col-7 ">
              <h4 className="mb-3">InfraCloud AI Bare Metal and Orchestration Platform</h4>
              <p className="text-gray">InfraCloud AI BareMetal platform provides GPU instances to consumers with a prebuilt & configured software stack. InfraCloud AI Orchestration platform utilizes the power of containers and Kubernetes to manage AI infrastructure while bin packing for efficiency. Get immediate access to the tools and frameworks you need to share GPU without the setup hassle.</p>

              <div>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Provide platform consumers with on-demand GPUs with per-minute/hour billing, fast booting instances, and powerful storage and networking, with the aim of minimizing downtime.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Be productive from the first hour with ML in a Box. Immediately start machine learning experiments and projects using the instances with a preconfigured software stack. Choose the framework of your choice, such as TensorFlow or PyTorch, and a familiar IDE, such as Jupyter Notebooks or VSCode.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Achieve effective auto healing and auto scaling platform with containerized workloads with Kubernetes orchestration. Efficiently manage GPU cloud resources & reduce the GPU running cost by utilizing Kubernetes auto-scaling features like scale to zero and cluster autoscaler.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Allocate the resources to multiple workloads by combining various scheduling techniques based on requirements such as fair share scheduler, guaranteed quotas, or GPU over provisioning through the platform. Match specific AI tasks to the most suitable hardware configurations using various node pooling techniques that enable dynamic resource allocation.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Track the health of your GPU cloud with built-in observability. This enables proactive capacity planning and maximizes uptime to ensure that your AI infrastructure consistently meets demand.</p>

              </div>
            </div>


          </div>
        </div>

        {/* third */}
        <div className=" p-3 mt-4">
          <div className="row">

            {/* Left Side */}
            <div className="col-7 ">
              <h4 className="mb-3">InfraCloud AI MLOps Platform and Control Plane</h4>
              <p className="text-gray">With InfraCloud AI MLOps Platform, data scientists and engineers can build, train & deploy models and run AI and MLOps experiments without spending energy and resources managing GPU cloud infrastructure. Manage multiple cloud resources, data sources, server requests, system performance, logs, policies, etc, and administer all the management and business functionality through a single pane of glass with the InfraCloud AI Control plane.</p>

              <div>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Test various experiments for AI business use cases without worrying about setting up the MLOps pipeline while using the various foundation models from the open source world to author notebooks.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Connect to data sources and clean data before using with models/notebooks to maintain output accuracy and relevancy. Build models and train them on a distributed cluster for faster training & tracking of the experiments.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Deploy models to a choice of inference servers based on your needs, which are fine-tuned with the underlying infrastructure. Track requests to inference servers and optimize & debug based on monitoring & log data of the inference servers to keep MLOps in a healthy state.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Handle & operate on-premise and on cloud clusters and workloads along with underlying infrastructure from one user-friendly dashboard without any learning curve.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor your system’s performance by tracking GPU, memory, and storage usage across your entire AI infrastructure in real-time and overview access control and audit logs of all operations on the platform to discover the unwanted waste of resources and downtime quickly.</p>

              </div>
            </div>

            {/* Right Side */}
            <div className="col-5 text-end d-flex align-items-center">
              <img
                src="https://www.infracloud.io/assets/img/cloud-ai/infracloud-ai-mlops-platform.svg"
                alt="Sample Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* four */}
        <div className=" p-3 mt-4">
          <div className="row">

            {/* Right Side */}
            <div className="col-5  text-start d-flex align-items-center">
              <img
                src="https://www.infracloud.io/assets/img/generative-ai-services/llm-deployment-scaling-&-monitoring.svg"
                alt="Sample Image"
                className="img-fluid"
              />
            </div>

            {/* Left Side */}
            <div className="col-7 ">
              <h4 className="mb-3">LLM Deployment, Scaling & Monitoring</h4>
              <p className="text-gray">Our AI experts will ensure that agents, models, and AI infrastructure remain healthy, resilient, and up to date to meet the regularly changing business demands and win the competitive advantage through speed.</p>

              <div>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Monitor & measure the performance of the generative AI agents and models in executing the stated tasks to improvise based on changes in data or in the performance of model.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Update models to the latest version and test end to end performance before switching the versions in production to ensure smooth upgrade.</p>
                <p className="text-gray"><span className="fw-bold fs-3 orange-color">&#8594;</span>Our AI cloud explerts set up monitoring & fine-tune the deployed agents and LLM to meet the demands of the business. Use auto scaling and auto healing to respond to traffic and errors to ensure minimal downtime.</p>

              </div>
            </div>


          </div>
        </div>








      </div>

      <Nitty_Gritty />

      <Footer />

    </div>
  )
}

export default Home

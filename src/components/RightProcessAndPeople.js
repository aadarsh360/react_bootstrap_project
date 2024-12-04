import React, { useState } from "react";

function RightProcessAndPeople() {

    // processes data array

    const processes = [
        { id: 1, name: "Discover Opportunities", imageUrl: "https://www.infracloud.io/assets/img/product-engineering/concept.svg", description: "This journey of developing the product starts with understanding the requirements and specifications" },
        { id: 2, name: "Building an MVP", imageUrl: "https://www.infracloud.io/assets/img/product-engineering/building-an-mvp.svg", description: "At InfraCloud, we believe in providing value to our customers. For every project, we start with building an MVP and start the project with confidence" },
        { id: 3, name: "Development", imageUrl: "https://www.infracloud.io/assets/img/product-engineering/development.svg", description: "Once the requirements and MVP are in place, our engineers will start developing the product. Depending on the engagement model, our team will work closely work with you in an agile way to build out a final product." },
        { id: 4, name: "Launch", imageUrl: "https://www.infracloud.io/assets/img/product-engineering/launch.svg", description: "Every product has to go through rigorous testing before the release. This ensures that your end users are getting the best user experience possible." },
        { id: 5, name: "Scale", imageUrl: "https://www.infracloud.io/assets/img/product-engineering/scale.svg", description: "Our journey with you won’t stop after the product launch. We will help you implement the feedback you got from users. This will ensure that you are reaching to product-market faster." }

    ]

    // State for the selected user
    const [selectedProcess, setSelectedProcess] = useState(processes[0]);

    // Function to handle user click
    const handleProcessClick = (process) => {
        setSelectedProcess(process);
    };


    return (
        <div className=" top-to-bottom-color">
            <div className="container ">

                {/* up */}
                <div className=" p-3 text-center">
                    <h3 className="fw-bold">Cloud Native Product Development with Right Processes & People</h3>
                    <p className="text-gray">Building cloud native product is not hard if you have the right processes in place.<br></br>
                        Here’s the process that we follow for each project.</p>
                </div>



                {/* down */}
                <div className=" p-3">
                    <div className="row">

                        {/* process list */}
                        <div className="col-12 col-md-6 p-3">
                            <ul className="list-group">
                                {processes.map((process) => (
                                    <li
                                        key={process.id}
                                        className="list-group-item list-group-item-action box-shadow fw-bold py-2"
                                        onClick={() => handleProcessClick(process)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span className="fs-2 fw-bold bg-light-green">0{process.id} </span>

                                        {process.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* process details */}
                        <div className="col-12 col-md-6 p-3">
                            
                            {selectedProcess ? (
                                <div className="row">
                                    <h4 className="mb-3 fw-bold bg-light-green p-2">{selectedProcess.name}</h4>

                                    <div className="row py-4 ">
                                        <div className="col-sm-4 col-12 ">
                                        <img
                                            src= {selectedProcess.imageUrl}
                                            alt="Sample 1"
                                            className="img-fluid"
                                        />
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <p className="text-gray">{selectedProcess.description}</p>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <p>Select a user to see their details</p>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightProcessAndPeople

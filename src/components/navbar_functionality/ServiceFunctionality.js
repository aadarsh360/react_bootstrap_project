import React, { useState } from 'react'

function ServiceFunctionality() {

    const [showMessage, setShowMessage] = useState(false);

    const navItems = [
        { id: "home", label: "Home", message: "Welcome to the Home page!" },
        { id: "about", label: "About", message: "Learn more about us." },
        { id: "services", label: "Services", message: "Explore our services." },
        { id: "portfolio", label: "Portfolio", message: "Check out our work." },
    ];

    return (
        <div>
            <span
                className="nav-item position-relative"
                onMouseEnter={() => setShowMessage(true)}
                onMouseLeave={() => setShowMessage(false)}>
                Service

                {/* Message box */}
                {showMessage && (
                    <div className="position-absolute" style={{
                        top: "100%", // Position below the text
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#f8f9fa",
                        background: "blue",
                        width:"50vh",
                        color: "#343a40",
                        padding: "10px",
                        borderRadius: "5px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        marginTop: "5px",
                        zIndex: 1000,
                        whiteSpace: "nowrap", // Prevent wrapping
                    }}>



                        <div className="container bg-light border">
                            <div className="row">
                                {/* Left Column */}
                                <div className="col-6 border-end">
                                    <p>Row 1 - Left</p>
                                    <p>Row 2 - Left</p>
                                    <p>Row 3 - Left</p>
                                    <p>Row 4 - Left</p>
                                </div>

                                {/* Right Column */}
                                <div className="col-6">
                                    <p>Row 1 - Right</p>
                                    <p>Row 2 - Right</p>
                                    <p>Row 3 - Right</p>
                                    <p>Row 4 - Right</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </span>

        </div>
    )
}

export default ServiceFunctionality

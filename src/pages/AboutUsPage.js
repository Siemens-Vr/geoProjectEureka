import React from "react";

const AboutUs = () => {
    return (
        <div className="about-us min-h-screen bg-gradient-to-b from-emerald-500 to-emerald-100 p-8">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">Virtual Mechatronics Lab</h1>
                <p className="text-gray-700 mb-8">
                    Our lab leverages the latest technologies to create highly detailed and interactive simulations of mechatronic systems.
                    This innovative approach significantly enhances the design, development, and deployment processes, resulting in more efficient, effective, and groundbreaking solutions in the field of mechatronics.
                </p>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Integration of Virtual Reality and Digital Technologies</h2>
                    <h3 className="text-xl font-medium text-blue-500 mb-2">High-Fidelity Simulations:</h3>
                    <p className="text-gray-700 mb-4">
                        Utilize advanced simulation techniques to model complex physical phenomena with high accuracy. This includes multi-physics simulations that integrate mechanical, electrical, thermal, and fluid dynamics aspects.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-medium text-blue-500 mb-2">Real-Time Simulations:</h3>
                    <p className="text-gray-700 mb-4">
                        Implement real-time simulation capabilities for dynamic testing of mechatronic systems. Real-time simulation allows for immediate feedback and adjustments, facilitating more effective design and control strategy development.
                    </p>
                    <h3 className="text-xl font-medium text-blue-500 mb-2">Virtual Collaboration Platforms:</h3>
                    <p className="text-gray-700 mb-4">
                        Use collaborative VR platforms to enable real-time interaction and problem-solving among distributed teams. These platforms allow team members to work together in a shared virtual space, regardless of their physical location.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-blue-500 mb-2">Cross-Disciplinary Collaboration:</h3>
                    <p className="text-gray-700">
                        Facilitate collaboration between experts from different fields (e.g., mechanical engineers, electrical engineers, software developers) through integrated virtual environments where they can jointly work on system design and optimization.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
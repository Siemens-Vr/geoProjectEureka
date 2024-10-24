const Homecard = () =>{
                return(
            <div className="flex p-20 space-x-10">
            {/* <!-- First Div --> */}
            <div className="w-1/2 p-6 bg-opacity-50 backdrop-blur-lg rounded-lg flex flex-col justify-center items-center hover:shadow-lg shadow-cyan-500 ...">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">What we do</h2>
                <p className="text-gray text-center">Create a robust augmented reality (AR) model integrated with device-to-device (D2D) communication and Internet of Things (IoT) technologies to enhance real-time data sharing and visualization in geothermal exploration.</p>
                <p className="text-blue-600 text-center mt-2 mb-3 shadow-inherit">Contribute Towards the Course</p>
            </div>

            {/* <!-- Second Div --> */}
            <div className="w-1/2 p-6  bg-opacity-50 backdrop-blur-lg rounded-lg flex flex-col justify-center items-center hover:shadow-lg shadow-cyan-500 ...">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">Impact Goals</h2>
                <p className="text-gray text-center">Ensure the adoption of the developed technologies in geothermal exploration practices across Africa.</p>
                <p className="text-gray-600 text-center decoration-solid">Strengthen linkages between research and industry to drive innovation in the geothermal sector.</p>
                <p className="text-gray text-center">Contribute to the overall advancement of knowledge and methodologies in geothermal exploration and data analysis.</p>
            </div>
            </div>
    );
}
export default Homecard
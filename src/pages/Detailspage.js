import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetProject from '../hooks/data/get/useGetProjects'; 
import Footer from "../components/Footer/footer";
import Carousel from "../components/Carousel/carousel";  // Import the Carousel component

const DetailsPage = () => {
    const location = useLocation();
    const {itemId, mediaFiles} = location.state || {} ;
    const { data, isLoading, error } = useGetProject(itemId);
    const navigate = useNavigate();
    console.log(mediaFiles)
   

    const handleCancel = () => {
        navigate('/dashboard');
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data available</div>;

    return (
        <main className="bg-gray-100 min-h-screen p-6">
            {/* Header */}
            <h3 className="text-2xl font-bold text-black-800 flex items-center justify-center mb-6">
                {data.title} - {data.date}
            </h3>

            <div className="container mx-auto py-6 space-y-6">
                {/* Flex container for Carousel and General Section */}
                <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
                    {/* Media Files Section (Carousel) */}
                    {<div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Media</h4>
                        <Carousel mediaFiles={mediaFiles} />
                    </div> }

                    {/* General Section */}
                    <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">General</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <p><span className="font-semibold">Location:</span> {data.datas.location}</p>
                            <p><span className="font-semibold">Sample type:</span> {data.datas.sampleType}</p>
                        </div>
                    </div>
                </div>

                {/* Geochemistry Section */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Geochemistry</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <p><span className="font-semibold">Depth:</span> {data.datas.depth}</p>
                        <p><span className="font-semibold">Temperature:</span> {data.datas.temperature}</p>
                        <p><span className="font-semibold">pH:</span> {data.datas.pH}</p>
                        <p><span className="font-semibold">Electrical conductivity:</span> {data.datas.electricalConductivity}</p>
                    </div>
                    <p className="mt-4"><span className="font-semibold">Geochemistry comment:</span><br />{data.geochemistry}</p>
                </div>

                {/* Geology Section */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Geology</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <p><span className="font-semibold">Lithology:</span> {data.datas.lithology}</p>
                        <p><span className="font-semibold">Alteration:</span> {data.datas.alteration}</p>
                        <p><span className="font-semibold">Mineralogy:</span> {data.datas.mineralogy}</p>
                        <p><span className="font-semibold">Texture:</span> {data.datas.texture}</p>
                        <p><span className="font-semibold">Hydrothermal features:</span> {data.datas.hydrothermalFeatures}</p>
                        <p><span className="font-semibold">Structure:</span> {data.datas.structure}</p>
                    </div>
                    <p className="mt-4"><span className="font-semibold">Geology comment:</span><br />{data.geology}</p>
                </div>

                {/* Geophysics Section */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Geophysics</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <p><span className="font-semibold">Method:</span> {data.datas.method}</p>
                        <p><span className="font-semibold">Survey date:</span> {data.datas.surveyDate}</p>
                        <p><span className="font-semibold">Depth of penetration meters:</span> {data.datas.depthOfPenetrationMeters}</p>
                        <p><span className="font-semibold">Resolutions meters:</span> {data.datas.resolutionsMeters}</p>
                        <p><span className="font-semibold">Measured parameters:</span> {data.datas.measuredParameters}</p>
                        <p><span className="font-semibold">Recovered properties of interest:</span> {data.datas.recoveredPropertiesOfInterest}</p>
                        <p><span className="font-semibold">Instrument used:</span> {data.datas.instrumentUsed}</p>
                        <p><span className="font-semibold">Potential targets:</span> {data.datas.potentialTargets}</p>
                    </div>
                    <p className="mt-4"><span className="font-semibold">Geophysics comment:</span><br />{data.geophysics}</p>
                </div>
            </div>

            <div className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
                <button 
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={handleCancel}
                >
                    Home
                </button>
            </div>

            <hr />
            <Footer />
        </main>
    );
};

export default DetailsPage;
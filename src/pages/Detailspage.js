import React from "react";
import { useLocation } from "react-router-dom";
import useGetProject from '../hooks/data/get/useGetProjects'; 

const DetailsPage = () => {
    const location = useLocation();
    const { itemId } = location.state; 
    const { data, isLoading, error } = useGetProject(itemId); 

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div className="container mx-auto p-4">
            <h3 className="font-bold text-lg">{data.title} - {data.date}</h3>
            <p className="py-4">
                <span className="font-bold underline">General :</span><br />
                <span className="underline">Location : {data.datas.location}</span> <br/>
                <span className="underline">Sample type :</span> {data.datas.sampleType}<br/>
            </p>
            <p className="py-2">
                <span className="font-bold underline">Geochemistry :</span><br />
                <span className="underline">Depth:</span> {data.datas.depth}<br/>
                <span className="underline">Temperature:</span> {data.datas.temperature}<br/>
                <span className="underline">pH:</span> {data.datas.pH}<br/>
                <span className="underline">Electrical conductivity:</span> {data.datas.electricalConductivity}<br/>
                <span className="underline">Geochemistry comment:</span><br/>
                {data.geochemistry}<br/>
            </p>
            <p className="py-2">
                <span className="font-bold underline">Geology :</span><br />
                <span className="underline">Lithology:</span> {data.datas.lithology}<br/>
                <span className="underline">Alteration:</span> {data.datas.alteration}<br/>
                <span className="underline">Mineralogy:</span> {data.datas.mineralogy}<br/>
                <span className="underline">Texture:</span> {data.datas.texture}<br/>
                <span className="underline">Hydrothermal features:</span> {data. datas.hydrothermalFeatures}<br/>
                <span className="underline">Structure:</span> {data.datas.structure}<br/>
                <span className="underline">Geology comment:</span><br/>
                {data.geology}<br/>
            </p>
            <p className="py-2">
                <span className="font-bold underline">Geophysics :</span><br />
                <span className="underline">Method:</span> {data.datas.method}<br/>
                <span className="underline">Survey date:</span> {data.datas.surveyDate}<br/>
                <span className="underline">Depth of penetration meters:</span> {data.datas.depthOfPenetrationMeters}<br/>
                <span className="underline">Resolutions meters:</span> {data.datas.resolutionsMeters}<br/>
                <span className="underline">Measured parameters:</span> {data.datas.measuredParameters}<br/>
                <span className="underline">Recovered properties of interest:</span> {data.datas.recoveredPropertiesOfInterest}<br/>
                <span className="underline">Instrument used:</span> {data.datas.instrumentUsed}<br/>
                <span className="underline">Potential targets:</span> {data.datas.potentialTargets}<br/>
                <span className="underline">Geophysics comment:</span><br/>
                {data.geophysics}
            </p>
            <p className="py-4">by {data.author}</p>
        </div>
    );
};

export default DetailsPage;

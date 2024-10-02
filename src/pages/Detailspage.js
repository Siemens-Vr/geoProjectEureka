import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5103/api';

const DetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this URL with your actual API endpoint
        const response = await fetch(`https://api.example.com/details/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="container mx-auto p-4">
      <h3 className="font-bold text-lg">{data.title} - {data.date}</h3>
      <p className="py-4">
        <span className="font-bold underline">General :</span><br />
        <span className="underline">Location :</span> {data.location}<br/>
        <span className="underline">Sample type :</span> {data.sampleType}<br/>
      </p>
      <p className="py-2">
        <span className="font-bold underline">Geochemistry :</span><br />
        <span className="underline">Depth:</span> {data.depth}<br/>
        <span className="underline">Temperature:</span> {data.temperature}<br/>
        <span className="underline">pH:</span> {data.pH}<br/>
        <span className="underline">Electrical conductivity:</span> {data.electricalConductivity}<br/>
        <span className="underline">Geochemistry comment:</span><br/>
        {data.geochemistry}<br/>
      </p>
      <p className="py-2">
        <span className="font-bold underline">Geology :</span><br />
        <span className="underline">Lithology:</span> {data.lithology}<br/>
        <span className="underline">Alteration:</span> {data.alteration}<br/>
        <span className="underline">mineralogy:</span> {data.mineralogy}<br/>
        <span className="underline">Texture:</span> {data.texture}<br/>
        <span className="underline">Hydrothermal features:</span> {data.hydrothermalFeatures}<br/>
        <span className="underline">Structure:</span> {data.structure}<br/>
        <span className="underline">Geology comment:</span><br/>
        {data.geology}<br/>
      </p>
      <p className="py-2">
        <span className="font-bold underline">Geophysics :</span><br />
        <span className="underline">Method:</span> {data.method}<br/>
        <span className="underline">Survey date:</span> {data.surveyDate}<br/>
        <span className="underline">Depth of penetration meters:</span> {data.depthOfPenetrationMeters}<br/>
        <span className="underline">Resolutions meters:</span> {data.resolutionsMeters}<br/>
        <span className="underline">Measured parameters:</span> {data.measuredParameters}<br/>
        <span className="underline">Recovered properties of interest:</span> {data.recoveredPropertiesOfInterest}<br/>
        <span className="underline">Instrument used:</span> {data.instrumentUsed}<br/>
        <span className="underline">Potential targets:</span> {data.potentialTargets}<br/>
        <span className="underline">Geophysics comment:</span><br/>
        {data.geophysics}
      </p>
      <p className="py-4">by {data.author}</p>
    </div>
  );
};

export default DetailsPage;

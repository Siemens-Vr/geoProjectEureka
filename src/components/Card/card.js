import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../Carousel/carousel";
import ButtonWithVerification from "../ButtonWithVerification/buttonWithVerification";
import useDeleteProject from "../../hooks/data/post/useDeleteProject";
import useAuthentication from "../../hooks/useAuthentication";


const Card = ({ mediaFiles, date, title, geology, geochemistry, geophysics, autor, id, datas, role, userId}) => {
    const { handleDeleteProject, isLoadingDeleteProject, alertBannerDeleteProject } = useDeleteProject();
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    const navigate = useNavigate()
    const handleEditProject = (id) => {
        navigate(`/edit-project/${id}`);
      }; 

    const isPossibleDelete = role === "admin"? true : userId === userInfos.id ? true : false
    
    return (
        <div>
            {alertBannerDeleteProject && alertBannerDeleteProject}
            <div className="bg-light-grey max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded shadow-xl m-4">
                <Carousel mediaFiles={mediaFiles} />

                <div className={`px-6 py-4`}>
                    <div className="font-bold text-black text-xl mb-2 truncate">{title} - {date}</div>
                    <p className="text-gray-700 text-base line-clamp-3">
                        <span className="font-bold underline">Geology :</span><br />
                        {geology}
                    </p>
                    <p className="text-gray-700 text-base line-clamp-3">
                        <span className="font-bold underline">Geochemistry :</span><br />
                        {geochemistry}
                    </p>
                    <p className="text-gray-700 text-base line-clamp-3">
                        <span className="font-bold underline">Geophysics :</span><br />
                        {geophysics}
                    </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{autor}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 pb-2">
                    <div className="col-span-1"></div>                    
                    <div className="col-span-1 flex justify-center space-x-4">
                    <button 
                        className="btn bg-medium-green hover:bg-light-green text-white border-none px-4 py-2 rounded-md"
                        onClick={() => handleEditProject(id)}>
                        Edit Details
                    </button>
                    
                    <button 
                        className="btn bg-medium-blue hover:bg-light-blue text-white border-none px-4 py-2 rounded-md"
                        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>
                        See more details
                    </button>
                    
                    {isPossibleDelete && (
                        <div className="col-span-1 flex items-center justify-end pr-2">
                        <ButtonWithVerification 
                            query={() => handleDeleteProject(id)} // Correction ici pour bien passer l'id dans la fonction
                            isLoading={isLoadingDeleteProject} 
                            id={id} 
                        />
                        </div>

                        
                    )}
                    </div>
                </div>
                <dialog id={`my_modal_${id}`} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="pt-4">
                            <Carousel mediaFiles={mediaFiles} />
                        </div>
                        

                        <h3 className="font-bold text-lg">{title} - {date}</h3>
                        <p className="py-4">
                            <span className="font-bold underline">General :</span><br />
                            <span className=" underline">Location :</span> {datas.location}<br/>
                            <span className=" underline">Sample type :</span> {datas.sampleType}<br/>

                        </p>
                        <p className="py-2">
                            <span className="font-bold underline">Geochemistry :</span><br />
                            <span className=" underline">Depth:</span> {datas.depth}<br/>
                            <span className=" underline">Temperature:</span> {datas.temperature}<br/>
                            <span className=" underline">pH:</span> {datas.pH}<br/>
                            <span className=" underline">Electrical conductivity:</span> {datas.electricalConductivity}<br/>
                            <span className=" underline">Geochemistry comment:</span><br/>
                            {geochemistry}<br/>
                        </p>
                        <p className="py-2">
                            <span className="font-bold underline">Geology :</span><br />
                            <span className=" underline">Lithology:</span> {datas.lithology}<br/>
                            <span className=" underline">Alteration:</span> {datas.alteration}<br/>
                            <span className=" underline">mineralogy:</span> {datas.mineralogy}<br/>
                            <span className=" underline">Geochimical analysis:</span><br/>
                            {datas.geochimicalAnalysis}<br/>
                            <span className=" underline">Texture:</span> {datas.texture}<br/>
                            <span className=" underline">Hydrothermal features:</span> {datas.hydrothermalFeatures}<br/>
                            <span className=" underline">Structure:</span> {datas.structure}<br/>
                            <span className=" underline">Geology comment:</span><br/>
                            {geology}<br/>

                        </p>
                        <p className="py-2">
                            <span className="font-bold underline">Geophysics :</span><br />
                            <span className=" underline">Method:</span> {datas.method}<br/>
                            <span className=" underline">Survey date:</span> {datas.surveyDate}<br/>
                            <span className=" underline">Depth of penetration meters:</span> {datas.depthOfPenetrationMeters}<br/>
                            <span className=" underline">Resolutions meters:</span> {datas.resolutionsMeters}<br/>
                            <span className=" underline">Measured parameters:</span> {datas.measuredParameters}<br/>
                            <span className=" underline">Recovered properties of interest:</span> {datas.recoveredPropertiesOfInterest}<br/>
                            <span className=" underline">Instrument used:</span> {datas.instrumentUsed}<br/>
                            <span className=" underline">Potential targets:</span> {datas.potentialTargets}<br/>
                            <span className=" underline">Geophysics comment:</span><br/>
                            {geophysics}
                        </p>
                        <p className="py-4">by {autor}</p>
                        <p className="py-4">(Press ESC key or click on ✕ button to close)</p>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Card;

import React,{useState} from 'react'
import useCreateProject from '../../hooks/data/post/useCreateProject';
import ButtonValidationForm from '../ButtonValidationForm/buttonValidationForm';
import { Link } from 'react-router-dom';
import Input from '../Input/input';
import FilesUploader from '../FilesUploader/filesUploader';

const CreateProjectForm = () => {
    const {handleSubmit, isLoading, alertBanner} = useCreateProject();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelection = (files) => {
        setSelectedFiles(files);
    };

    

    return (            

      <form action="#" method="POST" onSubmit={(e) => handleSubmit(e,selectedFiles)}>
        {alertBanner && alertBanner}
            <div className="border-b border-gray-900/10 pb-2 pl-2">
                <h2 className="text-2xl font-semibold leading-2 pb-4 pt-2">Create project :</h2>
                <div className="flex flex-nowrap">
                    <div className="w-1/12"></div>
                    <div className="w-10/12 space-y-4 ">
                    <div className="space-y-4 pb-2 pl-2 pr-2 border border-gray-200 rounded-lg">
                        <h2 className="text-xl font-semibold leading-2 pb-2 pt-2 pl-2">General :</h2>
                        <div className='pb-2 border-b border-gray-200'>
                            <FilesUploader id='filesUploader' handleFileSelection={handleFileSelection}/>
                        </div>
                        
                        <div className="flex justify-center items-center">
                            <Input type='text' isLabel={true} isRequired={true} title='Project name'id='projectName'size="max-w-xs w-80"/>
                        </div>
                        <div className="flex items-center justify-center space-x-6 line-clamp-1">
                            <Input type='text' isLabel={true} title='Location'id='location'size="max-w-xs w-full"/>
                            <Input type="text" isLabel={true} title="Sample type" id="sampleType" size="max-w-xs w-full"/>
                            <Input type="date" isLabel={true} title="Collection date" id="collectionDate" defaultValue={new Date().toISOString().split('T')[0]} size="max-w-xs w-full"/>
                        </div>
                    </div>

                    <div className="space-y-2 pb-2 pl-2 pr-2 border border-gray-200 rounded-lg">
                        <h2 className="text-xl font-semibold leading-2 pb-2 pt-2 pl-2">Geochemistry :</h2>
                        <div className="flex items-center justify-center space-x-6">
                        <Input type="number" isLabel={true} title="Depth" id="depth" size="max-w-xs w-full"/>
                        <Input type="number" isLabel={true} title="Temperature" id="temperature" size="max-w-xs w-full"/>
                        <Input type="number" isLabel={true} title="pH" id="pH" size="max-w-xs w-full"/>
                        <Input type="number" isLabel={true} title="Electrical conductivity" id="electricalConductivity" size="max-w-xs w-full"/>
                        </div>
                        <Input type='textarea'isLabel={true} title='Geochemistry comment'id='geochemistryComment'size="w-x-large"/>
                    </div>

                    <div className="space-y-4 pb-2 pl-2 pr-2 border border-gray-200 rounded-lg">
                        <h2 className="text-xl font-semibold leading-2 pb-2 pt-2 pl-2">Geology :</h2>
                        <div className="grid grid-cols-2 gap-4 justify-items-center justify-center">
                        <div className="col-span-1">
                            <Input type='text'isLabel={true} title='Lithology'id='lithology'size="max-w-xs w-full"/>
                            <Input type='text'isLabel={true} title='Mineralogy'id='mineralogy'size="max-w-xs w-full"/>
                            <Input type='text'isLabel={true} title='Texture'id='texture'size="max-w-xs w-full"/>
                            <Input type='text'isLabel={true} title='Structure'id='structure'size="max-w-xs w-full"/>
                        </div>
                        <div className="col-span-1">
                            <Input type='text'isLabel={true} title='Alteration'id='alteration'size="max-w-xs w-full"/>
                            <Input type='text'isLabel={true} title='Geochimical analysis'id='geochimicalAnalysis'size="max-w-xs w-full"/>
                            <Input type='text'isLabel={true} title='Hydrothermal features'id='hydrothermalFeatures'size="max-w-xs w-full"/>
                        </div>
                        </div>
                        <Input type='textarea'isLabel={true} title='Geology comment'id='geologyComment'size="w-x-large"/>
                    </div>

                    <div className="space-y-4 pb-2 pl-2 pr-2 border border-gray-200 rounded-lg"> 
                        <h2 className="text-xl font-semibold leading-2 pb-2 pt-2 pl-2">Geophysics :</h2>
                        <div className="grid grid-cols-2 gap-4 justify-items-center justify-center">
                        <div className="col-span-1">
                        <Input type='text'isLabel={true} title='Method'id='method'size="max-w-xs w-full"/>
                        <Input type='number'isLabel={true} title='Depth of penetration meters'id='depthOfPenetrationMeters's ize="max-w-xs w-full"/>
                        <Input type='text'isLabel={true} title='Measured parameters'id='measuredParameters'size="max-w-xs w-full"/>
                        <Input type='text'isLabel={true} title='Instrument used'id='instrumentUsed'size="max-w-xs w-full"/>
                        </div>
                        <div className="col-span-1">
                        <Input type='date'isLabel={true} title='Survey date'id='surveyDate'size="max-w-xs w-full"/>
                        <Input type='number'isLabel={true} title='Resolutions meters'id='resolutionsMeters'size="max-w-xs w-full"/>
                        <Input type='text'isLabel={true} title='Recovered properties of interest'id='recoveredPropertiesOfInterest'size="max-w-xs w-full"/>
                        <Input type='text'isLabel={true} title='Potential targets'id='potentialTargets'size="max-w-xs w-full"/>
                        </div>
                        </div>
                        <Input type='textarea'isLabel={true} title='Geophysics comment'id='geophysicsComment'size="w-x-large"/>
                    </div>
                    </div>
                    <div className="w-1/12"></div>
                </div>


            </div>
            
        <div className="mt-6 flex items-center justify-end gap-x-6 pb-2 pr-4">
            <Link to="/dashboard" className="text-sm font-semibold leading-6 ">
                Back
            </Link>
            <ButtonValidationForm
                isLoading={isLoading}    
                title={"Create"}  
            />
        </div>
    </form>
  )
}

export default CreateProjectForm;
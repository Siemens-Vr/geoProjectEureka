import React, { useEffect, useState } from 'react';

const FilesUploader = ({handleFileSelection , initialFiles=[]}) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [totalSize, setTotalSize] = useState(0); 

    const MAX_TOTAL_SIZE = 2 * 1024 * 1024 * 1024; // 2 Go max

    useEffect(() => {
        if (initialFiles.length > 0) {
            setSelectedFiles(initialFiles);
            const initialPreviews = initialFiles.map(file => ({
                url: file.url || URL.createObjectURL(file),
                type: file.type.startsWith('video') ? 'video' : 'image'
            }));
            setPreviews(initialPreviews);
            const initialTotalSize = initialFiles.reduce((sum, file) => sum + (file.size || 0), 0);
            setTotalSize(initialTotalSize);
        }
    }, [initialFiles]);


    // Fonction de gestion des fichiers sélectionnés
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files); // Transform FileList into a tab
        const newFiles= Array.from(e.target.files); //declare new files
        let currentTotalSize = totalSize;

        // Calcul size
        files.forEach(file => {
            currentTotalSize += file.size;
        });

        // Check if size < 2 Go
        if (currentTotalSize > MAX_TOTAL_SIZE) {
            alert('Total file size exceeds the 2 GB limit!');
            return;
        }

        const updatedFiles = [...selectedFiles, ...newFiles];
        setSelectedFiles(updatedFiles);
        setTotalSize(currentTotalSize);

        const newPreviews = newFiles.map(file => ({
            url: URL.createObjectURL(file),
            type : file.type.startsWith('video') ? 'video' : 'image'
        }));
        setPreviews([...previews, ...newPreviews]);
        handleFileSelection(updatedFiles)

        const removeFile = (index) => {
            const updatedFiles = selectedFiles.filter((_, i) => i !== index);
            const updatedPreviews = previews.filter((_, i) => i !== index);
            const updatedTotalSize = updatedFiles.reduce((sum, file) => sum + file.size, 0);
    
            setSelectedFiles(updatedFiles);
            setPreviews(updatedPreviews);
            setTotalSize(updatedTotalSize);
            handleFileSelection(updatedFiles);
        };


        setTotalSize(currentTotalSize);
        setSelectedFiles(files);
        

        // Preview url
        const previewURLs = files.map(file => {
            return {
                url: URL.createObjectURL(file),
                type: file.type.startsWith('video') ? 'video' : 'image'
            };
        });
        setPreviews(previewURLs);
        handleFileSelection(files)
    };

    return (
        <div>
            <h2>Select Images or Videos (Max Total Size: 2 GB)</h2>
            <div className="mt-2 mb-2">
                <input type="file" onChange={handleFileChange} className="hidden" multiple accept="image/*,video/*" id="filesSelectorButton" />
                <label htmlFor="filesSelectorButton" className="cursor-pointer text-white px-2 py-2 rounded bg-light-blue">
                    Selects picture(s) or video(s)
                </label>
            </div>

            <p>Total Size: {(totalSize / (1024 * 1024)).toFixed(2)} MB</p>

            <div style={{ marginTop: '20px' }}>
                <h3>Previews</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {previews.map((file, index) => (
                        file.type === 'image' ? (
                            <img
                                key={index}
                                src={file.url}
                                alt={`Preview ${index}`}
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                        ) : (
                            <video
                                key={index}
                                src={file.url}
                                controls
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                         ) 
                    ))};
                </div>
            </div>
        </div>
    );
};

export default FilesUploader;

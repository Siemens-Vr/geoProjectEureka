import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useNavigate } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';

const DocumentViewer = ({ documentId }) => {
    const [document, setDocument] = useState(null);
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();


    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(`/documents/getOneDoc?itemId=${documentId}`);
                setDocument(response.data);
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };
        fetchDocument();
    }, [documentId]);

    if (!document) return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500">Zero document</div>
        </div>
    );

    return (<>
    <Header connected={userInfos ? true : false} role={userInfos?.role}/>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">{document.title}</h2>
            <div className="mb-6">
                <p className="text-gray-700"><span className="font-semibold">Author:</span> {document.author}</p>
                <p className="text-gray-700"><span className="font-semibold">Upload Date:</span> {new Date(document.uploadDate).toLocaleDateString()}</p>
            </div>
            <div className="space-y-6">
                {document.files.map((file, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">File {index + 1}</h3>
                        {file.type === 'pdf' ? (
                            <div className="aspect-w-16 aspect-h-9">
                                <embed src={file.url} type="application/pdf" width="100%" height="100%" className="rounded-md" />
                            </div>
                        ) : file.type === 'image' ? (
                            <img src={file.url} alt={`Document ${index + 1}`} className="max-w-full h-auto rounded-md" />
                        ) : (
                            <a 
                                href={file.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                            >
                                View File
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div><Footer/></>
    );
};

export default DocumentViewer;
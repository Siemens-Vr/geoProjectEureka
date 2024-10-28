import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuthentication from '../../hooks/useAuthentication';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import DocumentForm from '../documents/DocumentForm'; // Import DocumentForm here

const DocumentList = ({ onEdit, onView }) => {
    const [documents, setDocuments] = useState([]);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const { getUserInfosFromSessionStorage } = useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const handleAddDoc = () => {
        setShowModal(true); // Show modal when Add button is clicked
    };

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('/documents/getDocs');
                setDocuments(response.data);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };
        fetchDocuments();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/documents/deleteDoc`, { data: { id } });
            setDocuments(documents.filter(doc => doc._id !== id));
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };

    // Close modal after form submission
    const handleFormSubmit = () => {
        setShowModal(false);
    };

    return (
        <>
            <Header connected={userInfos ? true : false} role={userInfos?.role}/>

            {/* Add Document Button */}
            <button
                onClick={handleAddDoc}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 mb-10 mt-10 ml-10"
            >
                Add +
            </button>

            <h2 className="text-2xl font-bold mb-10  ml-10">Document List</h2>

            {/* Document List */}
            <div>
                {documents.map((doc) => (
                    <div key={doc._id} className="border rounded p-3 mb-2">
                        <h3>{doc.title}</h3>
                        <p>by {doc.author}</p>
                        
                        {/* Action buttons */}
                        <button
                            onClick={() => onView(doc._id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                        >
                            View
                        </button>
                        <button
                            onClick={() => onEdit(doc)}
                            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(doc._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for Document Form */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-md max-w-lg w-full relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>

                        {/* DocumentForm component */}
                        <DocumentForm onClose={handleFormSubmit} />
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default DocumentList;

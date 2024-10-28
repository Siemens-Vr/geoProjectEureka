import React, { useState } from 'react';
import axios from 'axios';
import FilesUploader from '../FilesUploader/filesUploader'; // Import the FilesUploader component

const DocumentForm = ({ document = {}, onSubmit }) => {
  const [title, setTitle] = useState(document.title || '');
  const [author, setAuthor] = useState(document.author || '');
  const [uploadDate, setUploadDate] = useState(document.uploadDate || '');
  const [files, setFiles] = useState(document.files || []);

  // Function to handle file selection from FilesUploader
  const handleFileSelection = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('uploadDate', uploadDate);
    
    // Append all selected files to formData
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      if (document._id) {
        // Update document
        await axios.put(`/documents/updateDoc`, formData);
      } else {
        // Add new document
        await axios.post('/documents/addDoc', formData);
      }
      onSubmit();
    } catch (error) {
      console.error("Error saving document:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto border border-gray-200 mt-20 mb-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
        {document._id ? "Update Document" : "Add New Document"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter document title"
            required
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="uploadDate" className="block text-sm font-medium text-gray-700 mb-1">Upload Date</label>
          <input
            type="date"
            id="uploadDate"
            value={uploadDate}
            onChange={(e) => setUploadDate(e.target.value)}
            required
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Integrate FilesUploader for file selection */}
        <div>
          <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">Upload Files</label>
          <FilesUploader handleFileSelection={handleFileSelection} initialFiles={files} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          {document._id ? "Update Document" : "Add Document"}
        </button>
      </form>
    </div>
  );
};

export default DocumentForm;

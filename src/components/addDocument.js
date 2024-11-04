// src/components/AddDocument.js

import React, { useState } from 'react';
import apiService from '../services/apiServices';

const AddDocument = () => {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const newDocument = await apiService.addDocument(formData);
      alert(`Document added successfully: ${newDocument.fileName}`);
      setFile(null);
      setFileName('');
    } catch (error) {
      console.error('Error adding document:', error);
      alert('Failed to add document');
    }
  };

  return (
    <div>
      <h2>Add Document</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {fileName && <p>Selected File: {fileName}</p>}
    </div>
  );
};

export default AddDocument;

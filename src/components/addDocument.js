import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header/header';
import Footer from './Footer/footer';
import useAuthentication from '../hooks/useAuthentication';

const DocumentForm = () => {
  const [formType, setFormType] = useState('upload');
  const [file, setFile] = useState(null);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {getUserInfosFromSessionStorage}=useAuthentication();
  const userInfos = getUserInfosFromSessionStorage();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid PDF file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData();

    if (formType === 'upload') {
      if (!file) {
        setError('Please select a PDF file to upload.');
        setIsLoading(false);
        return;
      }
      formData.append('file', file);
    } else {
      if (!articleTitle.trim() || !articleContent.trim()) {
        setError('Please provide both title and content for the article.');
        setIsLoading(false);
        return;
      }
      formData.append('title', articleTitle);
      formData.append('content', articleContent);
    }

    try {
      const response = await axios.post(
        `http://localhost:3001/api/${formType === 'upload' ? 'upload-pdf' : 'create-article'}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setSuccess(response.data.message);
      if (formType === 'upload') {
        setFile(null);
      } else {
        setArticleTitle('');
        setArticleContent('');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Header connected={userInfos ? true : false} role={userInfos?.role}/>
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Document Submission</h1>
      
      <div className="mb-6">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setFormType('upload')}
            className={`px-4 py-2 rounded ${
              formType === 'upload'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Upload PDF
          </button>
          <button
            onClick={() => setFormType('write')}
            className={`px-4 py-2 rounded ${
              formType === 'write'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Write Article
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {formType === 'upload' ? (
          <div>
            <label htmlFor="pdf-upload" className="block text-sm font-medium text-gray-700 mb-2">
              Upload PDF
            </label>
            <input
              type="file"
              id="pdf-upload"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="article-title" className="block text-sm font-medium text-gray-700 mb-2">
                Article Title
              </label>
              <input
                type="text"
                id="article-title"
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter article title"
              />
            </div>
            <div>
              <label htmlFor="article-content" className="block text-sm font-medium text-gray-700 mb-2">
                Article Content
              </label>
              <textarea
                id="article-content"
                value={articleContent}
                onChange={(e) => setArticleContent(e.target.value)}
                rows="6"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your article content here"
              ></textarea>
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}
    </div>
    <Footer/></>
  );
};

export default DocumentForm;
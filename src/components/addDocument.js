'use client'

import { useState, useEffect } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import Footer from './Footer/footer'
import Header from './Header/header'

export default function ArticleAndDocumentManager() {
  const { getUserInfosFromSessionStorage } = useAuthentication();
  const userInfos = getUserInfosFromSessionStorage();
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [articles, setArticles] = useState([])
  const [documents, setDocuments] = useState([])
  const [selectedContent, setSelectedContent] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState('')

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleFileUpload = async (e) => {
    e.preventDefault()
    if (!file) {
      setError('Please select a file to upload')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      console.log('Uploading file:', file.name);
      const response = await fetch('http://localhost:5100/api/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      console.log('Upload response:', data);
      setMessage(data.message)
      setError('')
      fetchDocuments() // Refresh documents after upload
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('Error uploading file')
      setMessage('')
    }
  }

  const handleArticleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !content) {
      setError('Title and content are required')
      return
    }

    try {
      console.log('Creating article:', { title, content });
      const response = await fetch('http://localhost:5100/api/create-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      })
      const data = await response.json()
      console.log('Article creation response:', data);
      setMessage(data.message)
      setError('')
      setTitle('')
      setContent('')
      fetchArticles() // Refresh articles after creation
    } catch (err) {
      console.error('Error creating article:', err);
      setError('Error creating article')
      setMessage('')
    }
  }

  const fetchArticles = async () => {
    try {
      console.log('Fetching articles');
      const response = await fetch('http://localhost:5100/api/articles')
      const data = await response.json()
      console.log('Fetched articles:', data);
      setArticles(data.articles)
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Error fetching articles')
    }
  }

  const fetchDocuments = async () => {
    try {
      console.log('Fetching documents');
      const response = await fetch('http://localhost:5100/api/documents');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched documents:', data);
      setDocuments(data.documents);
    } catch (err) {
      console.error('Error fetching documents:', err);
      setError(`Error fetching documents: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchArticles()
    fetchDocuments()
  }, [])

  return (<>
  <Header connected={userInfos ? true : false} role={userInfos?.role} />
      <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-500">File Upload</h2>
          <form onSubmit={handleFileUpload} className="space-y-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Upload File
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Create Article</h2>
          <form onSubmit={handleArticleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Article Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Article Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded h-32"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Create Article
            </button>
          </form>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Articles</h2>
          <button
            onClick={fetchArticles}
            className="mb-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Refresh Articles
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedContent(article.content)
                    setSelectedTitle(article.title)
                  }}
                >
                  <h3 className="font-bold text-blue-500">{article.title}</h3>
                </div>
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Documents</h2>
          <button
            onClick={fetchDocuments}
            className="mb-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Refresh Documents
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.length > 0 ? (
              documents.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
                >
                  <h3 className="font-bold text-blue-500">{doc.name}</h3>
                  <a 
                    href={`http://localhost:5100${doc.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline"
                  >
                    View Document
                  </a>
                </div>
              ))
            ) : (
              <p>No documents found.</p>
            )}
          </div>
        </div>
      </div>

      {selectedContent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
            <h2 className="text-xl font-bold mb-4 text-blue-500">{selectedTitle}</h2>
            <button
              className="mb-4 text-red-500 font-bold"
              onClick={() => {
                setSelectedContent(null)
                setSelectedTitle('')
              }}
            >
              Close
            </button>
            <div className="overflow-y-auto max-h-96">
              <p>{selectedContent}</p>
            </div>
          </div>
        </div>
      )}

      {message && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mt-4">
          <strong>Success:</strong> {message}
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mt-4">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div><Footer/></>
  )
}
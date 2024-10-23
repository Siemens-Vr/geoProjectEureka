import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    firstname : '',
    lastname: '',
    role: '',
    email: '',
    phone: '',
    profileImage: null,
    Project: '',
    description : '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/teams');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('firstname', formData.firstname);
    data.append('lastname', formData.lastname);
    data.append('role', formData.role);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('Project',formData.Project);
    data.append('description', formData.description)
    if (formData.profileImage) {
      data.append('profileImage', formData.profileImage);
    }

    try {
      const response = await axios.post('/api/team/addteammember', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding team member:', error);
    }
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 shadow-md rounded-md space-y-6 mt-10"
    >
      <h2 className="text-xl font-semibold text-blue-700">Add Team Member</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
          <label className="block text-gray-700"> First Name:</label>
          <input
            type="text"
            name="Firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
            placeholder='First name'
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
            placeholder='Last name'
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            placeholder='role'
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder='email'
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder='Phone '
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            name="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
            placeholder='Description of member'
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Project</label>
          <input
            type="text"
            name="Project"
            value={formData.Project}
            onChange={handleInputChange}
            required
            placeholder='Project Name'
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="block text-gray-700">Profile Image:</label>
          <input
            type="file"
            name="profileImage"
            onChange={handleFileChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
        //   disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Team Member
        </button>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleCancel}>
          Teams
        </button>
      </div>
    </form>
  );
};

export default AddTeamMember;

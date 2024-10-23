import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import img1 from "../assets/images/13.jpg"

const ProfileList = () => {
  const profiles = [
    {
      id: 1,
      name: 'Kamali Kinuthia',
      role: 'Student at Dedan Kimathi University of Technology',
      linkedin: 'https://www.linkedin.com/in/your-linkedin',
      github: 'https://github.com/your-github',
      email: 'your-email@example.com',
      image: ""
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Software Developer at Example Corp',
      linkedin: 'https://www.linkedin.com/in/jane-doe',
      github: 'https://github.com/janedoe',
      email: 'jane.doe@example.com',
      image:"",
    },
    // Add more profiles as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            {/* Profile Info */}
            <img
              src={profile.image}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-gray-600">{profile.role}</p>

            {/* Social Media Icons */}
            <div className="flex mt-4 space-x-4">
              <a href={profile.linkedin} className="text-blue-500">
                <FaLinkedin size={24} />
              </a>
              <a href={profile.github} className="text-gray-800">
                <FaGithub size={24} />
              </a>
              <a href={`mailto:${profile.email}`} className="text-red-500">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;

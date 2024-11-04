import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthentication from '../hooks/useAuthentication';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

const TeamMemberPage = () => {
  const { getUserInfosFromSessionStorage } = useAuthentication();
  const userInfos = getUserInfosFromSessionStorage();
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    email: '',
    profilePicture: '',
    description: '',
    socialLinks: {
      linkedin: '',
      github: '',
      twitter: '',
      facebook: ''
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3001/api/team-members');
      setTeamMembers(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch team members. Please try again.');
      console.error('Error fetching team members:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => {
      if (name.startsWith('socialLinks')) {
        const [_, platform] = name.split('.');
        return {
          ...prev,
          socialLinks: {
            ...prev.socialLinks,
            [platform]: value
          }
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewMember((prev) => ({ ...prev, profilePicture: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in newMember) {
      if (key === 'socialLinks') {
        formData.append(key, JSON.stringify(newMember[key]));
      } else {
        formData.append(key, newMember[key]);
      }
    }
    try {
      await axios.post('http://localhost:3001/api/team-members', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setNewMember({
        name: '',
        role: '',
        email: '',
        profilePicture: '',
        description: '',
        socialLinks: { linkedin: '', github: '', twitter: '', facebook: '' }
      });
      setIsPopoverOpen(false);
      fetchTeamMembers();
    } catch (err) {
      setError('Failed to add team member. Please try again.');
      console.error('Error adding team member:', err);
    }
  };

  return (
    <>
      <Header connected={userInfos ? true : false} role={userInfos?.role} />
      <div className="container mx-auto p-4">
        {/* <h1 className="text-3xl font-bold mb-6 justify-items items-center text-center">Teams Page </h1> */}

        {userInfos?.role === 'admin' && (
          <button
            onClick={() => setIsPopoverOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Add New Team Member
          </button>
        )}

        {isPopoverOpen && userInfos?.role === 'admin' && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl">
              <
                h2 className="text-2xl font-semibold mb-4">Add New Team Member</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Form inputs for name, role, email, etc. */}
                <input
                  type="text"
                  name="name"
                  value={newMember.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="mb-4 w-full p-2 border rounded"
                  required
                />
                {/* More form fields for other member information */}
                <button
                  type="submit"
                  className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Add Team Member
                </button>
                <button
                  onClick={() => setIsPopoverOpen(false)}
                  className="col-span-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        <div>
          <h2 className="text-3xl font-bold mb-6  text-cente">The Ultimate Team</h2>
          {isLoading ? (
            <p className="text-center">Loading team members...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white shadow-md rounded p-4">
                  <img
                    src={member.profilePicture}
                    alt={`${member.name}'s profile`}
                    className="w-20 h-20 rounded-full mx-auto mb-2"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-700">{member.role}</p>
                  <p className="text-gray-700 mb-2">{member.email}</p>
                  <p className="text-gray-600 mb-2">{member.description}</p>
                  <div className="flex space-x-2">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        Twitter
                      </a>
                    )}
                    {member.socialLinks.facebook && (
                      <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamMemberPage;

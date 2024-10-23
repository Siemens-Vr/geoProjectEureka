import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header/header';
import useAuthentication from '../hooks/useAuthentication';

const TeamCard = ({ name, role, description, imageURL }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4 max-w-xs">
      <img src={imageURL} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const [team, setTeam] = useState([]);
  const navigate= useNavigate();
  const {getUserInfosFromSessionStorage}=useAuthentication();
  const userInfos = getUserInfosFromSessionStorage();

  useEffect(() => {
    // Fetch the team member data from backend API
    fetch('/api/getteammember')
      .then(response => response.json())
      .then(data => {
        setTeam(data);
      })
      .catch(error => {
        console.error("There was an error fetching the team data!", error);
      });
  }, []);

  const handleTeamPage = () => {
    // Add your logic for handling team page navigation here
    navigate('/add-team-member');
  };
  const handleTeamProfile =() =>{
    navigate('/profile-team')
  }
  

  return (
  <>
    <Header connected={userInfos ? true : false} role={userInfos?.role}/>
    <div>
      <h1 className='text-2xl font-bold text-blue-600 flex items-center justify-center ml-5 mb-2 mt-10'>Team Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {team.map(member => (
          <TeamCard 
            key={member.id}
            lastname={member.lastname}
            firstname={member.firstname}
            Project={member.Project}
            role={member.role}
            description={member.description}
            imageURL={member.imageURL}
          />
        ))}
      </div>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors ml-5" onClick={handleTeamPage}>Add Team Member</button>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors ml-5" onClick={handleTeamProfile}>ViewTeamProfile</button>
    </div>
    </>
  );
};

export default Team;
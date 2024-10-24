import React from 'react';
import { milestonesData } from '../milestones/mileStoneData';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import useAuthentication from '../hooks/useAuthentication';

const Milestones = () => {
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
  return (<>
   <Header connected={userInfos ? true : false} role={userInfos?.role}/>
   <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Project Milestones</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Outputs</th>
              <th className="border border-gray-300 px-4 py-2">Evidences</th>
              <th className="border border-gray-300 px-4 py-2">Timeline</th>
            </tr>
          </thead>
          <tbody>
            {milestonesData.map((milestone, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">{milestone.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside">
                    {milestone.outputs.map((output, idx) => (
                      <li key={idx} className="text-gray-700">{output}</li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside">
                    {milestone.evidences.map((evidence, idx) => (
                      <li key={idx} className="text-gray-700">{evidence}</li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">{milestone.timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Milestones;
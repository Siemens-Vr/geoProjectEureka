import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import Error404 from "../pages/Errors/error404";
import MyAccountPage from "../pages/myAccountPage";
import SignupPage from "../pages/signupPage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import CreateProjectPage from "../pages/createProjectPage";
import EditProjectPage from "../pages/editProjectPage"
import DetailsPage from "../pages/Detailspage";
import ContactPage from "../pages/ContactPage";
import AboutUsPage from "../pages/AboutUsPage";
import TermsOfUsePage from "../pages/TermsOfUsePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import CookiePolicyPage from "../pages/CookiePolicyPage";

// import Team from "../team/teamCard";
// import AddTeamMember from "../team/teamMemberPage";
// import Profile from "../team/teamProfile";
import Milestones from "../milestones/mileStone";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* GENERAL ROUTES */}
        <Route path="*" element={<Error404/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="" element={<HomePage />} />
        <Route path="/my-account" element={<MyAccountPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/create-project" element={<CreateProjectPage/>}/>
        <Route path="/edit-project/:id" element={<EditProjectPage/>}/>
        <Route path="/details" element={<DetailsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="about-us" element={<AboutUsPage/>}/>
        <Route path="/term-of-use" element={<TermsOfUsePage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        <Route path="/cookie-policy" element={<CookiePolicyPage/>}/>
        
       
        

        {/* <Route path="/teams" element={<Team/>}/>
        <Route path="add-team-member" element={<AddTeamMember/>}/>
        <Route path="/profile-team" element={<Profile/>}/> */}
        <Route path="/milestones" element={<Milestones/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
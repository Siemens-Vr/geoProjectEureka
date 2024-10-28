import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import Error404 from "../pages/Errors/error404";
import MyAccountPage from "../pages/myAccountPage";
import SignupPage from "../pages/signupPage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import CreateProjectPage from "../pages/createProjectPage";
import EditProjectPage from "../pages/editProjectPage";
import DetailsPage from "../pages/Detailspage";
import ContactPage from "../pages/ContactPage";
import AboutUsPage from "../pages/AboutUsPage";
import TermsOfUsePage from "../pages/TermsOfUsePage";
import Milestones from "../milestones/mileStone";
import GoogleDriveViewer from "../milestones/milestoneViewer";
import DocumentForm from "../components/documents/DocumentForm";
import DocumentList from "../components/documents/DocumentList";
import DocumentViewer from "../components/documents/DocumentViewer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* GENERAL ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/my-account" element={<MyAccountPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/edit-project/:id" element={<EditProjectPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/milestoneviewer" element={<GoogleDriveViewer />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        
        {/* Document Routes */}
        <Route path="/document-viewer" element={<DocumentViewer />} />
        <Route path="/document-form" element={<DocumentForm />} />
        <Route path="/document-list" element={<DocumentList />} />

        {/* 404 Error Route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

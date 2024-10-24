import React from 'react'
import { Link } from "react-router-dom"
import SiemensLogo from '../assets/images/Siemens-logo.png';
import useAuthentication from '../hooks/useAuthentication';
import Header from '../components/Header/header';


  const ContactCard = ({ icon, title, content, href, bgColor }) => (
    <div className="text-center mb-8 flex-1 basis-[200px] min-w-[200px] max-w-[300px] shadow-md rounded-lg p-6">
      <div className={`${bgColor} w-15 h-15 rounded-full flex justify-center items-center mx-auto mb-5`}>
        {icon}
      </div>
      <h3 className="text-teal-800 text-xl font-semibold mb-3">{title}</h3>
      <a
        href={href}
        className={`text-${bgColor.replace('bg-', '')} hover:text-${bgColor.replace('bg-', '')}-700 transition-colors duration-300`}
        target={title === 'Address' ? '_blank' : undefined}
        rel={title === 'Address' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    </div>
  )

const Footer = () => {
  return (
    <footer className="footer p-10 bg-sky-900 text-base-content mt-5">
      <aside> 
        <img src={SiemensLogo} className="w-72 max-w-96" alt="logo" />
      </aside> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <a className="link link-hover" href="https://vmlab.dkut.ac.ke">Home site</a>
        <Link className="link link-hover" to="/about-us">About us</Link>
        <Link className="link link-hover" to="/contact">Contact</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link className="link link-hover" to="/term-of-use">Terms of use</Link>
        <Link className="link link-hover" to="/privacy-policy">Privacy policy</Link>
        <Link className="link link-hover" to="/cookie-policy">Cookie policy</Link>
      </nav>
    </footer>
  )
}

export default function ContactPage() {
  const {getUserInfosFromSessionStorage} = useAuthentication();
  const userInfos = getUserInfosFromSessionStorage();
  const handleBackClick = () => {
    window.history.back()
  }

  return (
    <>
    <Header connected={userInfos ? true : false} role={userInfos?.role}/>

    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-white py-10 px-5 font-sans">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl font-bold text-red-800 mb-10">Contact Us</h2>
            <div className="flex flex-wrap justify-around gap-5">
              <ContactCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                }
                title="Phone"
                content="+254 716 150 627"
                href="tel:+254716150627"
                bgColor="bg-teal-800"
              />

              <ContactCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                }
                title="Email"
                content="siemens@dkut.ac.ke"
                href="mailto:siemens@dkut.ac.ke"
                bgColor="bg-red-800"
              />
              <ContactCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                }
                title="Address"
                content={
                  <>
                    Dedan Kimathi University of Technology,
                    <br />
                    Nyeri, Kenya
                  </>
                }
                href="https://maps.google.com/?q=Dedan+Kimathi+University+of+Technology"
                bgColor="bg-green-900"
              />
              <div className="text-center mb-8 flex-1 basis-[200px] min-w-[200px] max-w-[300px]">
                <div className="w-full h-[200px] rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7176650564924!2d36.96027731475205!3d-0.3923226997136056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285f1e0c2c9c0f%3A0x9a0d2c4a8c1c1c1a!2sDedan%20Kimathi%20University%20of%20Technology!5e0!3m2!1sen!2sus!4v1620298270925!5m2!1sen!2sus"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center px-4 py-2 border border-teal-800 rounded-md shadow-sm text-sm font-medium text-teal-800 bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
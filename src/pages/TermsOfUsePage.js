import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/header';
import useAuthentication from '../hooks/useAuthentication';
import SiemensLogo from '../assets/images/Siemens-logo.png';

const TermsofuseSection = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-xl font-semibold mb-4 text-black">{title}</h2>
    <div className="text-black">{children}</div>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer p-10 bg-sky-900 text-base-content mt-5">
      <aside>
        <img src={SiemensLogo} className="w-72 max-w-96" alt="Siemens logo" />
      </aside> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <a className="link link-hover" href="https://vmlab.dkut.ac.ke">Home site</a>
        <Link className="link link-hover" to="/about-us">About us</Link>
        <Link className="link link-hover" to="/contact">Contact</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link className="link link-hover" to="/terms-of-use">Terms of use</Link>
        <Link className="link link-hover" to="/privacy-policy">Privacy policy</Link>
        <Link className="link link-hover" to="/cookie-policy">Cookie policy</Link>
      </nav>
    </footer>
  );
};

export default function Termsofuse() {
  const { getUserInfosFromSessionStorage } = useAuthentication();
  const userInfos = getUserInfosFromSessionStorage();

  return (
    <>
      <Header connected={userInfos ? true : false} role={userInfos?.role} />
      <div className="container mx-auto px-4 py-8 bg-gray-300">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-black">Terms of Use for EUREKA Geothermal Energy Project</h1>
          
        

          <TermsofuseSection title="Acceptance of the Terms of Use">
            <p>
              These terms of use are entered into by and between You and Eureka Geothermal Energy Project ("Company," "we," or "us"). The following terms and conditions govern your access to and use of our website and platform, including any content, functionality and services offered on or through our website (the "Website"), whether as a guest or a registered user.
            </p>
            <p className="mt-2">
              Please read the Terms of Use carefully before you start to use the Website. By using the Website or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, incorporated herein by reference.
            </p>
          </TermsofuseSection>

          <TermsofuseSection title="Changes to the Terms of Use">
            <p>
              We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter.
            </p>
            <p className="mt-2">
              Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.
            </p>
          </TermsofuseSection>

          <TermsofuseSection title="Accessing the Website and Account Security">
            <p>
              We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.
            </p>
            <p className="mt-2">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Making all arrangements necessary for you to have access to the Website.</li>
              <li>Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</li>
            </ul>
          </TermsofuseSection>

          <TermsofuseSection title="Intellectual Property Rights">
            <p>
              The Website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by the Company, its licensors or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
            </p>
          </TermsofuseSection>

          <TermsofuseSection title="Prohibited Uses">
            <p>You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>In any way that violates any applicable federal, state, local or international law or regulation.</li>
              <li>For the purpose of exploiting, harming or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, another user or any other person or entity.</li>
            </ul>
          </TermsofuseSection>

          <TermsofuseSection title="Disclaimer of Warranties">
            <p>
              Your use of the Website, its content and any services or items obtained through the Website is at your own risk. The Website, its content and any services or items obtained through the Website are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
            </p>
          </TermsofuseSection>

          <TermsofuseSection title="Limitation on Liability">
            <p>
              To the fullest extent provided by law, in no event will the Company, its affiliates or their licensors, service providers, employees, agents, officers or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites or any services or items obtained through the Website or such other websites.
            </p>
          </TermsofuseSection>

          <TermsofuseSection title="Contact Us">
            <p>
             All feedback, comments, requests for technical support and other communications relating to the Website should be directed to: websupport@eurekageothermal.com
            
             </p>
          </TermsofuseSection>
        </div>
      </div>
      <Footer />
    </>
  );
}
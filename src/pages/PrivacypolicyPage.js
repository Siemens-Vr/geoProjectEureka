import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/header'
import useAuthentication from '../hooks/useAuthentication'
import SiemensLogo from '../assets/images/Siemens-logo.png';

const PolicyCard = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-xl font-semibold mb-4 text-black">{title}</h2>
    <div className="text-black">{children}</div>
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

export default function PrivacyPolicy() {
  const { getUserInfosFromSessionStorage } = useAuthentication()
  const userInfos = getUserInfosFromSessionStorage()

  return (
    <>
      <Header connected={userInfos ? true : false} role={userInfos?.role} />
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-black">Privacy Policy for EUREKA Geothermal Energy Project</h1>
         
          <p className="mb-6 text-black">
            EUREKA Geothermal Energy Project ("we", "us", or "our") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
            use our website and participate in our geothermal energy exploration project.
          </p>

          <PolicyCard title="Information We Collect">
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Personal information (e.g., name, email address, phone number)</li>
              <li>Professional information (e.g., job title, organization)</li>
              <li>Geothermal data logged through our platform</li>
              <li>Information collected through our Augmented Reality headset</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide, maintain, and improve our geothermal exploration services</li>
              <li>Develop new products and services related to geothermal energy</li>
              <li>Communicate with you about our project and services</li>
              <li>Analyze geothermal data for research purposes</li>
              <li>Comply with legal obligations</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="Information Sharing and Disclosure">
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Project partners and collaborators (e.g., research institutions, government agencies)</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="mt-2">We do not sell your personal information to third parties.</p>
          </PolicyCard>

          <PolicyCard title="Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect your information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet or electronic storage is 100% secure.
            </p>
          </PolicyCard>

          <PolicyCard title="Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            <p className="mt-2">To exercise these rights, please contact us using the information provided below.</p>
          </PolicyCard>

          <PolicyCard title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </PolicyCard>

          <PolicyCard title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              EUREKA Geothermal Energy Project<br />
              Email: privacy@eurekageothermal.com<br />
              Address: [Your Project Address]
            </p>
          </PolicyCard>
        </div>
      </div>
      <Footer />
    </>
  )
}
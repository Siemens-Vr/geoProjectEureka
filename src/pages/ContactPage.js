import React from 'react'

const ContactCard = ({ icon, title, content, href, bgColor }) => (
  <div className="text-center mb-8 flex-1 basis-[200px] min-w-[200px] max-w-[300px] shadow-md rounded-lg p-6">
    <div className={`${bgColor} w-15 h-15 rounded-full flex justify-center items-center mx-auto mb-5`}>
      {icon}
    </div>
    <h3 className="text-gray-800 text-xl font-semibold mb-3">{title}</h3>
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

export default function ContactPage() {
  return (
    <section className="bg-white py-10 px-5 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Contact Us</h2>
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
            bgColor="bg-blue-500"
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
            bgColor="bg-green-500"
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
            bgColor="bg-red-500"
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
    </section>
  )
}
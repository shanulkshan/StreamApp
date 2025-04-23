import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-10 py-6 bg-gray-800 text-white">
      {/* Social Media Icons */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href="#"
          style={{
            color: 'white',
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.color = '#A0AEC0')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          style={{
            color: 'white',
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.color = '#A0AEC0')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          style={{
            color: 'white',
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.color = '#A0AEC0')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Footer Links */}
      <div className="flex gap-8 text-lg font-medium">
        <a href="#" className="hover:underline transition duration-300">
          CONTACT INFO
        </a>
        <a href="#" className="hover:underline transition duration-300">
          PRIVACY POLICY
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Container } from 'react-bootstrap';

const footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark ms-1" href="/">
          YourWebsite.com
        </a>
      </div>
    </footer>
  );
};

export default footer;
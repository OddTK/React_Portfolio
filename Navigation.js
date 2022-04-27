import React from 'react';
import DistortedTK from '../img/distorted_tk.png';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
      <div>
          <div>
            <img className="navTK"
            src={DistortedTK}
            alt="tk"
            />
          </div>
    <ul className="nav nav-tabs" style={{display: 'flex', flexDirection: 'row', marginTop: '25px', marginBottom: '25px', alignItems: 'center', justifyContent: 'center'}}>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#About"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

import React, { useState } from 'react';
import './Navbar.css';
//import '../assets/logo.png';
export default function Navbar() {
  const [toggle, changetoggle] = useState(false);
  const handletoggle = () => changetoggle(!toggle);
  return (
    <div className='navbar'>
      <img src={require('../assets/logo.png')} alt="not_found" className='logo'></img>

      <ul className='list'>
        <li><a className='link' href='www.google.com'>HOME</a></li>
        <li><a className='link' href='www.google.com'>ABOUT US</a></li>
        <li><a className='link' href='www.google.com'>APPLY</a></li>
        <li><a className='link' href='www.google.com'>MORE</a>
          {/* <div className='sub-list'>
              <ul>
                <li>fsd</li>
                <li>fsd</li>
                <li>fsd</li>

              </ul>
              </div>*/}
        </li>

      </ul>
      <div className="menu-icon" onClick={handletoggle}>
        {/* <i className={toggle ? 'fas fa-times' : 'fas fa-bars'} />
            <ul className={toggle ? 'active':'not-active'}>
            <li><a className='link2' href='www.google.com'>HOME    </a></li>
            <li><a className='link2' href='www.google.com'>ABOUT US </a></li>
            <li><a className='link2' href='www.google.com'>APPLY   </a></li>
            <li><a className='link2' href='www.google.com'>MORE</a></li>
            </ul> */}
        <div className="btn-group dropstart">
          <i className={toggle ? 'fas fa-times' : 'fas fa-bars'} data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul className="dropdown-menu edit">
            <li><a className="dropdown-item edit " href="#" onClick={handletoggle}>HOME</a></li>
            <li><a className="dropdown-item edit" href="#" onClick={handletoggle}>ABOUT US</a></li>
            <li><a className="dropdown-item edit" href="#" onClick={handletoggle}>APPLY</a></li>
            <li><a className="dropdown-item edit" href="#" onClick={handletoggle}>MORE</a></li>

          </ul>
        </div>
      </div>
    </div>
  );
}

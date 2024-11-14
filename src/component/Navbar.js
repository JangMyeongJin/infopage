import React from 'react';
import '../styles/Navbar.css';

function Navbar() {

    const HandleGooleForm = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSehtwTJGDM8J1UB7mM7giZZjK0UgpGpb9JtWU3eNDeX3M96Cw/viewform?usp=sf_link', '_blank');
    }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/foot-w.png" alt="로고" />
          <span className="highlight">개발바닥</span>
        </div>


        <div>

        <button className="join-button nav-button" onClick={HandleGooleForm}>가입하기</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
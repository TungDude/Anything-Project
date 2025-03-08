import React from 'react';
import LinkWithHover from './_components/LinkWithHover/LinkWithHover';

const NavBar = ({ toggleNavbar }) => {
  const routeLabels = {
    "/": "Home",
    "about-me": "About Me",
    "not-found": "Not Found",
    "random": "Random",
  };

  return (
    <nav 
      className='w-full'
    >
      <ul
        className="space-y-2"
      >
        {Object.entries(routeLabels).map(([path, label]) => (
          <LinkWithHover
            key={path}
            path={path}
            label={label}
            onClick={toggleNavbar}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
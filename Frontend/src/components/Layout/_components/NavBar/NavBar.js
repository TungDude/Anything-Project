import React from 'react';
import LinkWithHover from './_components/LinkWithHover/LinkWithHover';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <LinkWithHover
            path="/"
            label="Home"
          />
        </li>
        <li>
          <LinkWithHover
            path="/about-me"
            label="About Me"
          />
        </li>
        <li>
          <LinkWithHover
            path="/not-found"
            label="Not Found"
          />
        </li>
        <li>
          <LinkWithHover
            path="/random"
            label="Random"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
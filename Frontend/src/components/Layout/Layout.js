import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import NavBar from './_components/NavBar/NavBar';

const Layout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header on the top */}
      <header className="bg-gray-800 text-white px-4 w-full h-20 flex items-center justify-between">
        <Header
          toggleNavbar={toggleNavbar}
        />
      </header>

      {/* Main content area (right side) */}
      <main className="flex flex-grow py-4 bg-white justify-center relative">
        <div className="flex flex-col items-center justify-start gap-2">
          {isNavbarOpen &&
            <div
              className="absolute top-0 left-0 flex justify-start items-star p-4 bg-black w-full h-full md:w-auto md:h-auto"
            >
              <NavBar
                toggleNavbar={toggleNavbar}
              />
            </div>
          }
          <Outlet />
        </div>
      </main>

      {/* Footer at the bottom */}
      <footer className="bg-gray-800 text-white p-4 w-full h-min">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

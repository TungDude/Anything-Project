import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import NavBar from './_components/NavBar/NavBar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header on the top */}
      <header className="bg-gray-800 text-white px-4 w-full h-20 flex items-center justify-between">
        <Header />
      </header>


      {/* NavBar on the left */}
      <div className="flex flex-grow">
        {/* NavBar (left side) */}
        <div className="w-28 bg-gray-300 p-4">
          <NavBar />
        </div>

        {/* Main content area (right side) */}
        <main className="flex flex-grow py-4 bg-white justify-center">
          <div className="flex flex-col items-center justify-start gap-2">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer at the bottom */}
      <footer className="bg-gray-800 text-white p-4 w-full h-min">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

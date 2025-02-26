import React from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Import layout
import Layout from './components/Layout/Layout';

// Import page components
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AboutMe from './pages/AboutMe/AboutMe';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/not-found" element={<NotFound />} />

            {/* Default navigate to home */}
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

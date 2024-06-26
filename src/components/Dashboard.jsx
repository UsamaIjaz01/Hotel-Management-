import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';
import About from './About'; // Import the About component
import Registration from './Registration'; // Import the Registration component
import Home from './Home';

const Dashboard = () => {
  return (
    <Router>
      <div >
        {/* Navigation bar */}
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button (hidden by default) */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed */}
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Icon when menu is open */}
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              {/* Desktop navigation menu */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <NavLink
                    to="/dashboard/home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/dashboard/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/dashboard/registration"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                  >
                    Registration
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/dashboard" element={<Navigate to="/dashboard/home" replace />} />
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/about" element={<About />} />
            <Route path="/dashboard/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;

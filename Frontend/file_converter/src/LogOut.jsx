// LogoutButton.js
import React, { useState } from 'react';

const LogOut = ({ onLogout }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Display the confirmation pop-up
    setShowModal(true);
  };

  const confirmLogout = () => {
    // Perform logout action
    onLogout();
    // Close the modal
    setShowModal(false);
  };

  const closeModal = () => {
    // Close the modal without logging out
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleLogout} className="text-white hover:underline focus:outline-none text-2xl">
        Log Out
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-blue-500 hover:underline mr-4">
                Cancel
              </button>
              <button onClick={confirmLogout} className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogOut;

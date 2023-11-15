// FileSelectPage.js
import React, { useState } from 'react';

const FileSelect = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Ensure that the selected file is a PDF file
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Select a PDF File</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        {selectedFile && (
          <div className="mt-4">
            <p className="font-bold">Selected File:</p>
            <p>{selectedFile.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileSelect;

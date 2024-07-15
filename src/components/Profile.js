import React, { useState, useRef } from 'react';
import './Profile.css';

const ProfileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const url = e.target.result;
        setImageUrl(url);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
    }
  };

  const handleClickChange = () => {
    // Trigger file input click to select a new file
    fileInputRef.current.click();
  };

  return (
    <div className="profile-uploader-container">
      {imageUrl ? (
        <div className="profile-preview" onClick={handleClickChange}>
          <img src={imageUrl} alt="Profile" />
        </div>
      ) : (
        <label className="profile-uploader-button" htmlFor="file-input">
          {selectedFile ? "Change Photo" : "Profile"}
        </label>
      )}
      <input
        type="file"
        id="file-input"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
};

export default ProfileUploader;

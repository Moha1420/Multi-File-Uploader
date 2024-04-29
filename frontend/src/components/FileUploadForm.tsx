// src/components/FileUploadForm.tsx

import React, { useState } from 'react';

interface FileUploadFormProps {
  onUpload: (file: File, description: string) => void;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({ onUpload }) => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    onUpload(file, description);
    setDescription('');
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUploadForm;

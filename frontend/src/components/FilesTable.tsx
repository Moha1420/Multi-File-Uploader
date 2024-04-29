// src/components/FilesTable.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface File {
  id: number;
  description: string;
  url: string;
}

const FilesTable: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get<File[]>('/files');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/files/${id}`);
      setFiles(files.filter(file => file.id !== id));
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>File</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {files.map(file => (
          <tr key={file.id}>
            <td>{file.description}</td>
            <td><a href={file.url} target="_blank" rel="noopener noreferrer">Download/View</a></td>
            <td><button onClick={() => handleDelete(file.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilesTable;

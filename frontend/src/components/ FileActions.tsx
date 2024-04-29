import React from 'react';

interface FileActionsProps {
  file: CustomFile; // Renamed to CustomFile to avoid naming conflicts
  onDelete: (id: number) => void;
}

interface CustomFile {
  id: number;
  // Add other properties as needed
}

const FileActions: React.FC<FileActionsProps> = ({ file, onDelete }) => {
  const handleDelete = () => {
    onDelete(file.id);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FileActions;

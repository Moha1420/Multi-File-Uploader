// src/components/EditFileForm.tsx

import React, { useState } from 'react';

interface EditFileFormProps() {
  fileId: number;
  currentDescription: string;
  onSave: (newDescription: string) => void;
  onCancel: () => void;
}

const FileEditForm: React.FC= ({ fileId, currentDescription, onSave, onCancel }) => {
    const [description, setDescription] = useState<string>(currentDescription);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSave(description);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={handleChange}
          placeholder="Enter new description"
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    );
  };
  
  export default FileEditForm;
  
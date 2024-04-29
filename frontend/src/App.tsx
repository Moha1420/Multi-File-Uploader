import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FileUploadForm from './src/components/FileUploadForm';
import FilesTable from './src/components/FilesTable';
import EditFileForm from './src/components/EditFileForm'; // Corrected import
import DeleteFileConfirmation from './src/components/DeleteFileConfirmation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/upload" component={FileUploadForm} />
        <Route path="/files" component={FilesTable} />
        <Route path="/files/:id/edit" component={EditFileForm} />
        <Route path="/files/:id/delete" component={DeleteFileConfirmation} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;

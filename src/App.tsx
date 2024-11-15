import React, { useState } from 'react';
import ServerList from './components/ServerList';
import ServerForm from './components/ServerForm';
import { Server } from './types';

const App: React.FC = () => {
  const [serverToEdit, setServerToEdit] = useState<Server | null>(null);

  const handleEdit = (server: Server) => {
    setServerToEdit(server);
  };

  const handleSave = () => {
    setServerToEdit(null);
  };

  return (
    <div>
      <h1>Back Office</h1>
      <ServerForm serverToEdit={serverToEdit || undefined} onSave={handleSave} />
      <ServerList onEdit={handleEdit} />
    </div>
  );
};

export default App;

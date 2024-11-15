import React, { useState, useEffect } from 'react';
import { Server } from '../types';
import { addServer, updateServer } from '../api/serverApi';

interface ServerFormProps {
  serverToEdit?: Server;
  onSave: () => void;
}

const ServerForm: React.FC<ServerFormProps> = ({ serverToEdit, onSave }) => {
  const [server, setServer] = useState<Omit<Server,"_id">>({name: '',});

  useEffect(() => {
    if (serverToEdit) {
      setServer(serverToEdit);
    }
  }, [serverToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.value
    console.log(name)
    setServer({name})
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (serverToEdit) {
      await updateServer({  _id: serverToEdit._id,name:server.name });
    } else {
      await addServer(server.name);
    }
    onSave();
    setServer({name:""});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{serverToEdit ? 'Edit Server' : 'Add Server'}</h2>
      <input
        name="name"
        value={server.name}
        onChange={handleChange}
        placeholder="Server Name"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ServerForm;

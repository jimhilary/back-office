import React, { useEffect, useState } from 'react';
import { Server } from '../types';
import { fetchServers, deleteServer } from '../api/serverApi';

interface ServerListProps {
  onEdit: (server: Server) => void;
}

const ServerList: React.FC<ServerListProps> = ({ onEdit }) => {
  const [servers, setServers] = useState<Server[]>([]);

  const loadServers = async () => {
    const data = await fetchServers();
    setServers(data);
  };

  const handleDelete = async (id: string) => {
    await deleteServer(id);
    loadServers();
  };

  useEffect(() => {
    loadServers();
  }, []);

  return (
    <div>
      <h2>Server List</h2>
      <ul>
        {servers.map(server => (
          <li key={server._id}>
            <span>{server.name}</span>
            <button onClick={() => onEdit(server)}>Edit</button>
            <button onClick={() => handleDelete(server._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;

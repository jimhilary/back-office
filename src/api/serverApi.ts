import { Server } from '../types';

const API_URL = 'http://localhost:3000/server';

export const fetchServers = async (): Promise<Server[]> => {
  const response = await fetch(API_URL+"/get");
  return response.json();
};

export const addServer = async (server: string): Promise<Server> => {
  const response = await fetch(API_URL+"/create", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({name:server}),
  });
  return response.json();
};

export const deleteServer = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/delete/${id}`, { method: 'DELETE' });
};

export const updateServer = async (server: Server): Promise<Server> => {
  const response = await fetch(`${API_URL}/edit/${server._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({name:server.name}),
  });
  return response.json();
};

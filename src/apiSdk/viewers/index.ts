import axios from 'axios';
import queryString from 'query-string';
import { ViewerInterface, ViewerGetQueryInterface } from 'interfaces/viewer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getViewers = async (query?: ViewerGetQueryInterface): Promise<PaginatedInterface<ViewerInterface>> => {
  const response = await axios.get('/api/viewers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createViewer = async (viewer: ViewerInterface) => {
  const response = await axios.post('/api/viewers', viewer);
  return response.data;
};

export const updateViewerById = async (id: string, viewer: ViewerInterface) => {
  const response = await axios.put(`/api/viewers/${id}`, viewer);
  return response.data;
};

export const getViewerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/viewers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteViewerById = async (id: string) => {
  const response = await axios.delete(`/api/viewers/${id}`);
  return response.data;
};

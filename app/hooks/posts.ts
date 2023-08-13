import { useQuery } from '@tanstack/react-query';
import * as api from 'api/posts';

export const usePost = (id: string) => useQuery(['post', 'id'], () => api.getPost(id));

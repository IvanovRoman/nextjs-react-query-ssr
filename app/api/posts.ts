import axios from 'lib/axios';

export const getPost = async (id: string) => {
  const { data } = await axios.get('/posts/' + id);
  return { ...data, id };
}

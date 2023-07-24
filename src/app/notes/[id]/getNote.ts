import 'server-only';

import { apiUrl } from '@/constants/api';

import { zNote } from '../type';

const getNote = async (id: string) => {
  const res = await fetch(`${apiUrl}/notes/${id}`, { cache: 'no-store' });
  const data = await res.json();
  return zNote.parse(data);
};

export { getNote };

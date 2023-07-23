import { z } from 'zod';

const zNote = z.object({
  id: z.number().int(),
  title: z.string(),
  body: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
const zNotes = z.array(zNote);
const zUpsertNote = z.object({
  title: z.string(),
  body: z.string(),
});

type Note = z.infer<typeof zNote>;
type Notes = z.infer<typeof zNotes>;

export { zNote, zNotes, zUpsertNote };
export type { Note, Notes };


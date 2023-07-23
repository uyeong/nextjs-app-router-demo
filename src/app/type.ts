import { z } from 'zod';

const zVersion = z.string().regex(/^\d+\.\d+\.\d+$/);
const zSettings = z.object({
  version: zVersion,
  faq: z.string(),
  tos: z.string(),
});

type Settings = z.infer<typeof zSettings>;

export { zVersion, zSettings };
export type { Settings };

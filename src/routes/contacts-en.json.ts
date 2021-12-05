import fs from 'fs';
import { parseMD } from '../lib/posts/process';

export const get = (): { body: { html: string } } => {
  const data = fs.readFileSync('src/contents/pages/contacts/en.md', 'utf8');
  const body = parseMD(data);
  return { body: { html: body } };
};

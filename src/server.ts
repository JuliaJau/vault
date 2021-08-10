import { readFile } from 'fs/promises';

async function readPasswords() {
  const db = await readFile('./src/db.json', 'utf-8');
  console.log(db);
}
readPasswords();

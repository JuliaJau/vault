import { writeFile } from 'fs';
import { readFile } from 'fs/promises';
import { DB, Credential } from '../types';

export async function readCredentials(): Promise<Credential[]> {
  const response = await readFile('/src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials = db.credentials;
  return credentials;
}

export async function getCredential(service: string): Promise<Credential> {
  const credentials = await readCredentials();
  const credential = credentials.find(
    (credential) => credential.service === service
  );

  if (!credential) {
    throw new Error(`No credential found for service: $(service)`);
  }
  return credential;
}

export async function addCredential(credential: Credential): Promise<void> {
  // waits for function above and saves in var
  const credentials = await readCredentials();
  // add an object to the credentials array
  const newCredentials = [...credentials, credential];

  const newDB: DB = {
    credentials: newCredentials,
  };

  await writeFile('/src/db.json', JSON.stringify(newDB));

  // add argument to excisting credentials
  // create new DB
  // overwrite DB using writeFile :tada:
  // Bonus: extract function, add setDB, accepts DB objects overwrites DB
}

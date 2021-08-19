import React from 'react';
import styles from './Dashboard.module.css';

export default function Dashboard(): JSX.Element {
  return (
    <>
      <main className={styles.container}>
        <h1>_NerdPass</h1>
        <p className={styles.info}>
          $#%! 1234...😡 <br></br>Forgot your passwords?
        </p>
        <input
          className={styles.input}
          type="text"
          placeholder="Search.."
        ></input>

        <div className={styles.content}>Content</div>
      </main>
    </>
  );
}

import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={`/sv-se/laundry/washing-machines/compact-washing-machine/`}>
        <button
          style={{
            margin: 'auto',
            display: 'flex',
            marginTop: '150px',
            padding: '10px',
            background: '#011e41',
            color: '#fff',
          }}
          type="button"
        >
          Click Here to Go to PLP Page
        </button>
      </Link>
    </div>
  );
}

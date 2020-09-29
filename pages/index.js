import Head from "next/head";

import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Note App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Video Note App</h1>

        <p className={styles.description}>
          Get started by loging in or signing up
        </p>

        <div className={styles.grid}>
          <Link href="/login">
            <a className={styles.card}>
              <h3>Log In &rarr;</h3>
            </a>
          </Link>

          <Link href="/signup">
            <a className={styles.card}>
              <h3>Sign Up &rarr;</h3>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
// export async function getServerSideProps(context) {
//   const { client } = await connectToDatabase();

//   const isConnected = await client.isConnected(); // Returns true or false

//   return {
//     props: { isConnected },
//   };
// }

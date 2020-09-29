import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Video Note App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Video Note App Dashboard</h1>
      </main>

      <Footer />
    </div>
  );
}

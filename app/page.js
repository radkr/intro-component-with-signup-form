import styles from "./page.module.css";

import SignUpForm from "@/app/_components/sign-up-form/sign-up-form";

export default function Home() {
  return (
    <main className={styles.contentArea}>
      <div className={styles.intro}>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className={styles.signUp}>
        <p className={styles.pricing}>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
        <SignUpForm />
      </div>
    </main>
  );
}

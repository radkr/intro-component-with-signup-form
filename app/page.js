import Image from "next/image";
import styles from "./page.module.css";

import icon from "@/static/icon-error.svg";

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
        <form aria-label="Sign Up Form" className={styles.signUpForm}>
          <p className={styles.field}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              autoFocus
            />
            <Image src={icon} alt="Error Icon" className={styles.errorIcon} />
            <span className={styles.error}>First Name cannot be empty</span>
          </p>
          <p className={styles.field}>
            <label htmlFor="lastName">First Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <Image src={icon} alt="Error Icon" className={styles.errorIcon} />
            <span className={styles.error}>Last Name cannot be empty</span>
          </p>
          <p className={styles.field}>
            <label htmlFor="email">First Name</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <Image src={icon} alt="Error Icon" className={styles.errorIcon} />
            <span className={styles.error}>Look like this is not an email</span>
          </p>
          <p className={styles.field}>
            <label htmlFor="password">First Name</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <Image src={icon} alt="Error Icon" className={styles.errorIcon} />
            <span className={styles.error}>Password cannot be empty</span>
          </p>
          <button>CLAIM YOUR FREE TRIAL</button>
          <p className={styles.terms}>
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </p>
        </form>
      </div>
    </main>
  );
}

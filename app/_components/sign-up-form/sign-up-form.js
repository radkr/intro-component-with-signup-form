import Input from "@/app/_components/input/input";
import styles from "./sign-up-form.module.css";

export default function SignUpForm() {
  return (
    <form aria-label="Sign Up Form" className={styles.signUpForm}>
      <Input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        errorMessage="First Name cannot be empty"
        autoFocus
      />
      <Input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        errorMessage="Last Name cannot be empty"
      />
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        errorMessage="Look like this is not an email"
      />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        errorMessage="Password cannot be empty"
      />
      <button>CLAIM YOUR FREE TRIAL</button>
      <p className={styles.terms}>
        By clicking the button, you are agreeing to our{" "}
        <a href="#">Terms and Services</a>
      </p>
    </form>
  );
}

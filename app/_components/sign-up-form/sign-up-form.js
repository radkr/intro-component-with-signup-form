"use client";

import { useState } from "react";
import z from "zod";

import Input from "@/app/_components/input/input";
import styles from "./sign-up-form.module.css";

const signUpSchema = z.object({
  firstName: z.string().min(1, { message: "First Name cannot be empty" }),
  lastName: z.string().min(1, { message: "Last Name cannot be empty" }),
  email: z.string().email({ message: "Look like this is not an email" }),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

export default function SignUpForm() {
  const [isValid, setIsValid] = useState({});

  function getIsValid(formData) {
    const validationResult = signUpSchema.safeParse(formData);
    let isValid = {};
    if (!validationResult.success) {
      isValid = validationResult.error.issues.reduce((isValid, issue) => {
        if (issue.path.length > 0 && !isValid[issue.path[0]]) {
          isValid[issue.path[0]] = issue.message;
        }
        return isValid;
      }, isValid);
    }
    return isValid;
  }

  function handleSubmit(event) {
    const formData = Object.fromEntries(new FormData(event.target).entries());
    const isValid = getIsValid(formData);
    setIsValid(isValid);
    if (Object.keys(isValid).length > 0) {
      event.preventDefault();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Sign Up Form"
      className={styles.signUpForm}
      noValidate
    >
      <Input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        errorMessage={isValid.firstName}
        autoFocus
      />
      <Input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        errorMessage={isValid.lastName}
      />
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        errorMessage={isValid.email}
      />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        errorMessage={isValid.password}
      />
      <button>CLAIM YOUR FREE TRIAL</button>
      <p className={styles.terms}>
        By clicking the button, you are agreeing to our{" "}
        <a href="#">Terms and Services</a>
      </p>
    </form>
  );
}

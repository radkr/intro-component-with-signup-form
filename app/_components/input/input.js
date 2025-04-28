import Image from "next/image";
import styles from "./input.module.css";
import icon from "@/static/icon-error.svg";

export default function Input({
  type,
  id,
  name,
  placeholder,
  errorMessage,
  autoFocus,
}) {
  return (
    <p className={styles.field} data-testid={`${id}Test`}>
      <label htmlFor={id} className={styles.fieldLabel}>
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`${styles.fieldInput} ${
          errorMessage ? styles.fieldInput_Invalid : ""
        }`}
      />
      {errorMessage && (
        <Image src={icon} alt="Error Icon" className={styles.errorIcon} />
      )}
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </p>
  );
}

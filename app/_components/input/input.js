import Image from "next/image";
import styles from "./input.module.css";
import icon from "@/public/icon-error.svg";

export default function Input({
  type,
  id,
  name,
  placeholder,
  errorMessage,
  autoFocus,
  onFocus,
  onBlur,
}) {
  return (
    <p className={styles.field} data-testid={`${id}Test`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`${styles.fieldInput} ${
          errorMessage ? styles.fieldInput_Invalid : ""
        }`}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={placeholder}
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

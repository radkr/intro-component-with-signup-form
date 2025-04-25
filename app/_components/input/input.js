import Image from "next/image";
import styles from "./input.module.css";
import icon from "@/static/icon-error.svg";

export default function Input({
  type,
  id,
  name,
  placeholder,
  errorMessage,
  autofocus,
  active,
}) {
  return (
    <p className={`${styles.field} ${active ? styles.active : ""}`}>
      <label htmlFor={id} className={styles.fieldLabel}>
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autofocus={autofocus}
        className={styles.fieldInput}
      />
      <Image src={icon} alt="Error Icon" className={styles.errorIcon} />
      <span className={styles.error}>{errorMessage}</span>
    </p>
  );
}

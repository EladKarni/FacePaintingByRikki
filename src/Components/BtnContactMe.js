import styles from "@/styles/Button.module.scss";

const BtnContactMe = ({scroll}) => {
  return (
    <button className={styles.button} onClick={scroll}>
        Contact Me
    </button>
  )
}

export default BtnContactMe

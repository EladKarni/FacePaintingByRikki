import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import styles from "@/styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
        <p>Copyright 2023 Face Painting By Rikki </p>
        <div className={styles.iconContainer}>
        <BsFacebook className={styles.bottomIcon} />
        <BsTwitter className={styles.bottomIcon} />
        <BsYoutube className={styles.bottomIcon} />
        </div>
    </div>
  )
}

export default Footer

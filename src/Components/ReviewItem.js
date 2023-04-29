import Image from "next/image";
import styles from "@/styles/Reviews.module.scss";
import profile from "../Assets/profilepic.jpeg";

const ReviewItem = ({name, quote}) => {
    console.log(name, quote)
    return (
        <div className={styles.reviewBox}>
            <p>
                {quote}
            </p>
            <div className={styles.profileContainer}>
                <Image
                    src={profile}
                    width={50}
                    height={50}
                    alt="reviewer profile"
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ReviewItem

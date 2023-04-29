import ReviewItem from '@/Components/ReviewItem'
import styles from "@/styles/Reviews.module.scss";

const Reviews = () => {
    return (
        <div className={styles.reviewSection}>
            <h1 className={styles.reviewsHeader}>Reviews</h1>
            <div className={styles.reviews}>
                <ReviewItem name="John Doe" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae." />
                <ReviewItem name="John Doe" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae." />
                <ReviewItem name="John Doe" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae." />
                <ReviewItem name="John Doe" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae." />
            </div>
        </div>
    )
}

export default Reviews

import styles from "@/styles/Packages.module.scss";
import PackgeBox from "./PackgeBox";

const Packages = ({scroll}) => {
    return (
        <div className={styles.packages}>
            <div className={styles.packagesLeft}>
                <h1>Our Packages</h1>
            </div>

            <div className={styles.packagesCenter}>
                <PackgeBox title="Full Designs" desc="10 - 22 People" scroll={scroll} />
                <PackgeBox title="Full Designs" desc="10 - 22 People" scroll={scroll} />
            </div>
            <div className={styles.packagesRight}>
                <PackgeBox title="Full Designs" desc="10 - 22 People" scroll={scroll} />
                <PackgeBox title="Full Designs" desc="10 - 22 People" scroll={scroll} />
            </div>
        </div>
    )
}

export default Packages

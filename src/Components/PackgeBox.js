import styles from "@/styles/PackageBox.module.scss";

const PackgeBox = ({title, desc, scroll}) => {
    return (
        <div className={styles.packageBox}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default PackgeBox

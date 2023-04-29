import styles from "@/styles/ContentSection.module.scss";

const ContentSection = ({children, topColor, bottomColor}) => {

  const sectionColor = {
    "backgroundImage": `linear-gradient(to top, ${bottomColor}, rgba(255, 255, 255, 0))`,
    "backgroundColor": topColor
  }

  return (
    <div className={styles.ShadedSection} style={sectionColor}>
      {children}
    </div>
  )
}

export default ContentSection

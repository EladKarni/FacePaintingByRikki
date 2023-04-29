import styles from "@/styles/AboutSection.module.scss";
import Image from "next/image";
import BtnContactMe from "./BtnContactMe";
import facepaint from "../Assets/facepaint.jpg";

const AboutSection = ({scroll}) => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutLeft}>
                <h1>About Rikki</h1>
                <p>
                    {`Rikki began painting faces in 2011 after a friend correctly
                    guessed, "I bet you'd really like face painting!" Since then,
                    Rikki has taken classes, attended painting jams, and learned
                    from more senior painters, all to get where she is today - At
                    your party!`}
                </p>
                <BtnContactMe scroll={scroll} />
            </div>
            <div className={styles.aboutRight}>
                <Image
                    src={facepaint}
                    className={styles.image}
                    height={400}
                    width={400}
                    alt="Artist Portrait"
                ></Image>
            </div>
        </div>
    )
}

export default AboutSection

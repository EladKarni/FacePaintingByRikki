import styles from "@/styles/Hero.module.scss";
import logo from "../Assets/logo.png";
import Image from "next/image";

const HeroSection = ({scroll}) => {
  return (
    <div className={styles.top}>
    <div className={styles.videoContainer}>
      <video
        loop
        autoPlay
        muted
        style={{
          position: "absolute",
          opacity: "80%",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,

          objectFit: "cover",
        }}
      >
        <source
          src={
            "https://media.istockphoto.com/id/1152176721/video/face-painting-session.mp4?s=mp4-640x640-is&k=20&c=kM_p8bkmL4zerM9HmG9Ms4Evs1Wf1-31wJmkz836cso="
          }
          type="video/mp4"
        />
      </video>
      <div className={styles.topContentContainer}>
        <Image src={logo} width={200} height={200} alt="logo"></Image>
        <h1> Face Painting By Rikki</h1>
        <p>
          Get Ready to take your costume to a whole new level with these
          spooky, simple, and unique face paint ideas.
        </p>
        <button className={styles.button} onClick={scroll}>
          Get in Touch
        </button>
      </div>
    </div>
  </div>
  )
}

export default HeroSection

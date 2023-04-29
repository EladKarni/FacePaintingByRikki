import styles from "@/styles/Commitment.module.scss";

const Commitment = () => {
  return (
      <div className={styles.commitment}>
          <h1 className={styles.commitmentHeader}>
              Our Commitment to Safety
          </h1>
          <p>
              {`Face painting by Rikki staff including Rikki and all artists all
              have squeaky clean background checks on file, for you and your
              guests peace of mind. We use industry standard face and body
              paints whiche are hypoallergenic and includ anti-bacterial agents.
              Each painter carriers liability insurance because it's good to be
              safe. If you have any questions or for more info, please ask.`}
          </p>
      </div>
  )
}

export default Commitment

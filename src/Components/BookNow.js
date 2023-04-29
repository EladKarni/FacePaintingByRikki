import styles from "@/styles/BookNow.module.scss";
import facepaint from "../Assets/facepaint.jpg";
import Image from "next/image";

import React from 'react'

const BookNowOptionItem = ({title}) => {
  return (
      <div className={styles.bookNowOption}>
          <h2>{title}</h2>
          <Image
              src={facepaint}
              width={200}
              height={200}
              className={styles.galleryImage}
              alt={title}
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
      </div>
  )
}

const BookNow = ({scroll}) => {
    return (
        <div className={styles.bookNow}>
            <h1>Event Types</h1>
            <div className={styles.bookNowRow}>
                <BookNowOptionItem title="Parties" />
                <BookNowOptionItem title="Corp Events" />
                <BookNowOptionItem title="LAN Parties" />
            </div>
        </div>
    )
}

export default BookNow

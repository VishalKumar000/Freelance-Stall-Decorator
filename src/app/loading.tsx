import React from "react";
import styles from "../styles/MainLayoutLoading.module.css";

const Loading = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.loader}>
        {Array.from({ length: 5 }, (_, i) => (
          <div className={styles.dot} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Loading;

import styles from "../Message/Message.module.css";
/* eslint-disable react/prop-types */
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;

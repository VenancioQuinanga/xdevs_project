import styles from "./Message.module.css";

function Message({msg,msgType}) {
  return (
    msg &&(
      <div className={`${styles.message} ${styles[msgType]}`}>{msg}</div>    
    )
  );
}

export default Message

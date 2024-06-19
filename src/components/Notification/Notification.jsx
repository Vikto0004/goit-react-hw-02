import css from "./Notification.module.css";

export default function Notification({ totalFeedback }) {
  return !totalFeedback && <p className={css.text}>No feedback yet</p>;
}

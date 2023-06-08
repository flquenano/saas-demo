import styles from "./prLayout.module.scss";

export default function ParticipantRegistryLayout({ children }) {
  return (
    <section className={styles.participantRegistry}>
      <aside />
      <section className={styles.prContent}>{children}</section>
    </section>
  );
}

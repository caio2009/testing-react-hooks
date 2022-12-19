import styles from './Title.module.css';

export default function Title(props) {
  const { text } = props;

  return (
    <div className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
}

import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'
import { URLS } from './../../const';

export const NotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <p>404</p>
        <p>Ой! Кажется вы попали на несуществующую страницу. Кринжуток здесь не будет!</p>
        <Link to={URLS.MAIN}>Вернуться на главную</Link>
      </div>
    </>
  );
};

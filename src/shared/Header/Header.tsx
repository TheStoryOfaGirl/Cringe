import styles from './Header.module.css'
import Logo from './../../assets/img/logo.svg'

export const Header = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} className={styles.img}/>
        <p className={styles.logo_name}>кринжутки</p>
      </div>
    </div>
    </>
  )
}
import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'

export default function Footer(){
  return(
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}></div>
        <Logo />
        [ソーシャル]
      </Container>
    </footer>
  )
}
import styles from '../styles/components/footer.module.css'

import githubImg from '../assets/github.png'
import linkedinImg from '../assets/linkedin.png'

export function Footer() {
  return(
    <div className={styles.footerEstilo}>
      <p>Desenvolvido por 
        <strong>Raiani Alcides</strong>
      </p>
      <div className={styles.footerImg}>
        <img src={githubImg} alt="" />
        <img src={linkedinImg} alt="" />
      </div>
    </div>
  )
}
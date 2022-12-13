import styles from '../styles/components/footer.module.css'

import githubImg from '../assets/github.png'
import linkedinImg from '../assets/linkedin.png'

export function Footer() {
  return(
    <div className={styles.footerEstilo}>
      <p>Desenvolvido por 
        <strong> Raiani Alcides</strong>
      </p>
      <div className={styles.footerImg}>

       <a href="https://github.com/rayalcides" target='_blank'>
        <img src={githubImg} alt="" />
       </a>
       <a href="https://www.linkedin.com/in/raiani-alcides-744984176/" target='_blank'>
        <img src={linkedinImg} alt="" />
       </a>

      </div>
    </div>
  )
}
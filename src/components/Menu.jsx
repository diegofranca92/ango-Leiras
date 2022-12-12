import { Link } from "react-router-dom"

import styles from '../styles/components/menu.module.css'
import imgLogo from '../assets/logo.png'

export function Menu() {
    return(
      <div className={styles.menuConteiner}>
        <img src={imgLogo} alt="" />
        <ul>
          <li>
            <Link to="/">Inicio</Link>   
          </li>
          <li>
            <Link to="/capoeira">+Capoeira</Link>   
          </li>
        </ul>
      </div>
    )
}
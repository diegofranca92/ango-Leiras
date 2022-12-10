import { Link } from "react-router-dom"

import styles from '../styles/components/menu.module.css'

export function Menu() {
    return(
      <div className={styles.menuConteiner}>
        <span>Logo</span>
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
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import styles from '../styles/pages/inicio.module.css'



export function Inicio() {
    return(
      <div>
        <Header />
        <section className={styles.listaCards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    )
}
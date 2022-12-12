import { Header } from '../components/Header'
import { Card } from '../components/Card'
import styles from '../styles/pages/inicio.module.css'
import { dados } from '../service/dados';


export function Inicio() {
    return(
      <div>
        <Header />
        <section className={styles.listaCards}>
       {
         dados.map((grupo) => (
          <Card nome={grupo.nome} local={grupo.local} responsavel={grupo.responsavel} capa={grupo.capa}/>
        ))
       }
  
        </section>
      </div>
    )
}
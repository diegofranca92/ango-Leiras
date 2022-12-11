import styles from '../styles/components/card.module.css'

export function Card() {
    return(
        <div className={styles.card}>
            <img src="./src/assets/grupo-capoeira.jpg" alt="" />
            <div className={styles.cardConteudo}>
             <h3>Grupo de Capoeira</h3>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, doloribus veniam perferendis repellendus dolores natus vero, maiores ad, porro </p>
             <button>Conhecer</button>
            </div>
        </div>
    )
}
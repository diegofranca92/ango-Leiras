import styles from '../styles/components/card.module.css'

export function Card(props) {
    return(
        <div className={styles.card}>
            <img src={props.capa} alt="" />
            <div className={styles.cardConteudo}>
             <h3>{props.nome}</h3>
             <p>
                Responsável: 
                <strong> {props.responsavel}</strong>
             </p>
             <p>{props.local}</p>
             <button>Conhecer</button>
            </div>
        </div>
    )
}
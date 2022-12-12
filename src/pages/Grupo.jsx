import styles from '../styles/pages/grupo.module.css';

export function Grupo() {
  return(                                                                                      
    <main className={styles.conteiner}>                                                                                          
      <img src="https://scontent.fssa15-1.fna.fbcdn.net/v/t39.30808-6/261636027_5352762431405391_2830989155875546957_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=6Txha2yzaxcAX_BEz1t&_nc_ht=scontent.fssa15-1.fna&oh=00_AfB7C83co355bvxmkTivQCh7zutXzzgHE0kOyPuJxIGNGA&oe=639D18BE" alt="" />
      <div className={styles.cardDescricao}>
       <h1>Reliquias espinho remoso</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur neque dolore explicabo excepturi obcaecati voluptates perspiciatis nisi minima maiores officia quis, est repellat alias similique quibusdam libero porro aliquam?</p>
      </div>
      <div className={styles.cardLateral}>
        <h2>Informaçoes do grupo</h2>
         <p></p>
         <p></p>
         <strong>Horario e Dias de treinos</strong>
         <p></p>
         <p></p>
         <button>Como Chegar</button>
      </div>
    </main>
  )
}
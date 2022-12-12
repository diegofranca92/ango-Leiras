import styles from '../styles/pages/grupo.module.css';
import { useParams } from 'react-router-dom';
import { dados } from '../service/dados';
import { useState, useEffect } from 'react';

export function Grupo() {

  const params = useParams() 
  
  const [grupo, setGrupo] = useState({})
  // const [descricao, setDescricao] = useState('')
  // const [responsavel, setResponsavel] = useState('')

  function carregarDados() {
    dados.find((grupo) =>{
      if (grupo.id == params.id) {
        setGrupo(grupo)
      }
    })
  }

  useEffect(() => {
    carregarDados()
  }, []);
  

  return(                                                                                      
    <main className={styles.conteiner}>                                                                                          
      <img src="https://scontent.fssa15-1.fna.fbcdn.net/v/t39.30808-6/261636027_5352762431405391_2830989155875546957_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=6Txha2yzaxcAX_BEz1t&_nc_ht=scontent.fssa15-1.fna&oh=00_AfB7C83co355bvxmkTivQCh7zutXzzgHE0kOyPuJxIGNGA&oe=639D18BE" alt="" />
      <div className={styles.blocoDescricao}>
       <div className={styles.cardDescricao}>
        
         <h1>{grupo.nome}</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur neque dolore explicabo excepturi obcaecati voluptates perspiciatis nisi minima maiores officia quis, est repellat alias similique quibusdam libero porro aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur neque dolore explicabo excepturi obcaecati voluptates perspiciatis nisi minima maiores officia quis, est repellat alias similique quibusdam libero porro aliquam?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur neque dolore explicabo excepturi obcaecati voluptates perspiciatis nisi minima maiores officia quis, est repellat alias similique quibusdam libero porro aliquam?</p>
       </div>
       <div className={styles.cardLateral}>
        <h2>Informaçoes do grupo</h2>
         <p></p>
         <p></p>
         <strong>Horario e Dias de treinos</strong>
         <p></p>
         <p> Mais informação: 
          <strong>(71)98895-6959</strong>
         </p>
         <button>Como Chegar</button>
       </div>
      </div>
    </main>
  )
}
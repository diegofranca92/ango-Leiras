import styles from '../styles/pages/grupo.module.css';
import  img  from '../assets/angola9.png'
import  figuras  from '../assets/angola8.png'
import  figura  from '../assets/angola7.png'
import { useParams } from 'react-router-dom';
import { dados } from '../service/dados';
import { useState, useEffect } from 'react';
import  whats  from '../assets/whats.svg'

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
    carregarDados();
  }, []);
  

  return(                                                                                      
    <main className={styles.conteiner}>                                                                                          
      <img className={styles.imgPrincipal} src={grupo.capa} alt="" />
      <div className={styles.blocoDescricao}>
       <div className={styles.cardDescricao}>
         <h1>{grupo.nome}</h1>
         <p>{grupo.descricao}</p>
        <div className={styles.containerFirura}>
         <img className={styles.grupoFigura} src={img} alt="" />
         <img className={styles.grupoFiguras} src={figuras} alt="" />
         <img className={styles.grupoFigu} src={figura} alt="" />
        </div> 
       </div>
       <div className={styles.cardLateral}>
        <h2>Informaçoes do grupo</h2>
         <p>Responsável: 
          <strong>{grupo.responsavel}</strong>
         </p>
         <p> Contato: 
          <strong> {grupo.contato}</strong>
         </p>
         <p>Local de treinos:  
           <strong> {grupo.local}</strong>
         </p>
         <p>Tipo:
           <strong> {grupo.tipo}</strong>
         </p>
         <p>Treinos:
          <strong> {grupo.treinos}</strong>
         </p>
         <p>Horários:
          <strong> {grupo.horarios}</strong>
         </p>
        
         <div className={styles.buttonFoto}>
          <a href={grupo.localizacao} target='_blank'>Como Chegar</a>
          <a href={`https://api.whatsapp.com/send?phone=55${grupo.contato}`} target='_blank'>
           <img src={whats} alt="" />
          </a>
         </div>
       </div>
      </div>
    </main>
  )
}
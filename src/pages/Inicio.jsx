import { Card } from '../components/Card'
import styles from '../styles/pages/inicio.module.css'
import { dados } from '../service/dados';
import imgBanner from '../assets/banner.png'
import { useState, useEffect} from 'react'



export function Inicio() {

  const [bairros, setBairros] = useState([])
  const [bairro, setBairro] = useState('')
  const [grupos, setGrupos] = useState([])

  function carregarDados() {
    let bairrosFiltrados = dados.reduce(function (bairros, grupo) {
      if (grupo.bairro in bairros) {
        bairros[grupo.bairro]++;
      }
      else {
        bairros[grupo.bairro] = 1;
      }
      
      return bairros;
    }, {});
    console.log(bairrosFiltrados);

    setBairros(Object.keys(bairrosFiltrados))
  }

  function filtrarBairro() {
   let gruposFiltrados = dados.filter( (grupo) => {
      if (grupo.bairro == bairro) {
        return grupo
      } 
      if(bairro === 'todos' ) return grupo
   })

    console.log('Grupos filtrados', gruposFiltrados);

    setGrupos(gruposFiltrados)

  }



  useEffect(() => {
    carregarDados();  
    setBairro('todos')
  }, []);

  useEffect(() => {
    filtrarBairro()
  }, [bairro]);
  


    return(
      <div>
        <header className={styles.headerConteiner}>
          <div className={styles.infoBanner}>
             <h1>Angoleiras</h1>
             <p>Lorem ipsum dolor sit amet consectetur fhtjy cbfjt dgrhtjyhfhd fhtj6j6th rfrhg5ry5ereg sgrjhthr greh db cbgfjyt adipisicing elit. Accusamus et voluptatum deserunt delectus rem voluptas, eos tempora, molestiae deleniti quaerat dicta volupta</p>
            <form>
                <p> <strong> Onde está procurando o grupo ? </strong> </p>
                
              <select onChange={(e) => {setBairro(e.target.value)}} value={bairro}>
                <option value="todos">Selecione a localidade</option>
                <option value="todos">Todos os Grupos</option>
                {
                  bairros.map((nomeBairro, index) => (
                    <option key={index} value={nomeBairro}>{nomeBairro}</option>
                  ))
                }
              </select>
            </form>
          </div>
          <div className={styles.imgBanner}>
            <img src={imgBanner} alt="desenho de uma mulher preta, obra do artista Patreon" />
          </div>
        </header>
        <section className={styles.listaCards}>
       {
         grupos.map((grupo) => (
          <Card key={grupo.id} link={grupo.id} nome={grupo.nome} local={grupo.local} responsavel={grupo.responsavel} capa={grupo.capa}/>
        ))
       }
  
        </section>
      </div>
    )
}
import styles from '../styles/components/header.module.css'
import imgBanner from '../assets/banner.png'
import { dados } from '../service/dados'
import { useState, useEffect} from 'react'


export function Header() {

  const [bairros, setBairros] = useState([])

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

  useEffect(() => {
    carregarDados();
  }, []);
  

    return(
        <header className={styles.headerConteiner}>
          <div className={styles.infoBanner}>
             <h1>Angoleiras</h1>
             <p>Lorem ipsum dolor sit amet consectetur fhtjy cbfjt dgrhtjyhfhd fhtj6j6th rfrhg5ry5ereg sgrjhthr greh db cbgfjyt adipisicing elit. Accusamus et voluptatum deserunt delectus rem voluptas, eos tempora, molestiae deleniti quaerat dicta volupta</p>
            <form>
                <p> <strong> Onde está procurando o grupo ? </strong> </p>
              <select name="" id="">
                <option value="">Selecione a localidade</option>
                {
                  bairros.map((bairro, index) => (
                    <option key={index} value={index}>{bairro}</option>
                  ))
                }
              </select>
            </form>
          </div>
          <div className={styles.imgBanner}>
            <img src={imgBanner} alt="desenho de uma mulher preta, obra do artista Patreon" />
          </div>
        </header>
    )
}
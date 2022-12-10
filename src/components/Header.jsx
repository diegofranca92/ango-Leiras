import styles from '../styles/components/header.module.css'

export function Header() {
    return(
        <header className={styles.headerConteiner}>
          <div className={styles.inforPrincipal}>
             <h1>Angoleiras</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et voluptatum deserunt delectus rem voluptas, eos tempora, molestiae deleniti quaerat dicta volupta</p>
            <form>
                <label htmlFor="">Onde está procurando o grupo ?</label>
              <select name="" id="">
                <option value="">Selecione a localidade</option>
              </select>
            </form>
          </div>
          <div className={styles.imgPrincipal}>
            <img src="src\assets\mulher-capoeira.png" alt="desenho de uma mulher preta, obra do artista Patreon" />
          </div>
        </header>
    )
}
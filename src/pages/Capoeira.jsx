import styles from '../styles/pages/capoeira.module.css'      
import img from '../assets/angola8.png' 
import foto from '../assets/mulher-capoeira.png'                                                       

export function Capoeira() {
    return(
      <main>
        <h1>História da capoeira</h1>
        <section className={styles.containerCapoeira}>
            <p>A capoeira é uma expressão cultural brasileira que compreende os elementos: arte-marcial, esporte, cultura popular, dança e música. Foi criada no século XVII pelo povo escravizado da etnia banto e se difundiu por todo o Brasil. Hoje é considerada um dos maiores símbolos da cultura brasileira. <br />A palavra capoeira significa "o que foi mata", por meio da conexão dos termos ka'a ("mata") e pûer ("que foi"). Alude às áreas de mata rasa do interior do Brasil, onde era feita a agricultura indígena.
               Tem origem com os fugitivos da escravidão, os quais utilizavam frequentemente a vegetação rasteira para fugirem do encalço dos capitães-do-mato. Esses foram os primeiros capoeiristas. <br />A capoeira foi uma prática proibida no Brasil até 1930, quando passa a ser reconhecida como um símbolo da identidade brasileira. Em 2014, a Roda de Capoeira foi declarada Patrimônio Cultural Imaterial da Humanidade pela Unesco. </p>
               <div className={styles.caractsCapoeira}>
                 <h3>Características da Capoeira</h3>
                 <ul>
                    <li>Acompanhamento de música: berimbau, e demais instrumentos, canto e palmas.</li>
                    <li>Formação em roda: roda de capoeira.</li>
                    <li>Graduação do capoeirista feita por cordas de cores diferentes atadas na cintura.</li>
                 </ul>
               </div>
            <section className={styles.diferentesCapoeira}>
              <div className={styles.descricaoAngola}>
                 <h3>Capoeira Angola</h3>
                 <p>A Angola é o estilo original que era praticado pelo povo escravizado. Essa maneira de jogar capoeira é caracterizada por ser mais lenta, composta de movimentos furtivos e executados de modo rasteiro.
                    O componente básico desse estilo é a malícia. Essa 'malandragem' consiste em simular movimentos que sirvam para enganar o oponente em combate.</p>
                    <img src={img} alt="" />
              </div>
              <div className={styles.descricaoRegional}>
                 <h3>Capoeira Regional</h3>
                 <p>A capoeira Regional é o estilo contemporâneo de capoeira. Ela possui atributos de outras artes-marciais em sua prática.
                    Esse estilo foi criado pelo Mestre Bimba e difundiu-se rapidamente pelo mundo, aumentando o número dos adeptos da capoeira em vários países.</p>
                    <img src={foto} alt="" />
              </div>
            </section>
            <div>
                <h4>Curiosidades sobre a Capoeira: Você Sabia?</h4>
                <ul>
                    <li>Um capoeirista experimentado que ignora a musicalidade é considerado incompleto. Ele deve ser capaz de tocar os instrumentos típicos, cantar e aplaudir durante o jogo de capoeira.</li>
                    <li>Outras demonstrações culturais, como o maculelê e o samba de roda, são muito associadas à capoeira, embora tenham ascendência e significados distintos.</li>
                </ul>
            </div>
            <div>
                <strong>
                    <p>'Laura Aidar'</p>
                </strong>
                     <p>Arte-educadora e artista visual</p>
            </div>
        </section>
      </main>
        
    )
}
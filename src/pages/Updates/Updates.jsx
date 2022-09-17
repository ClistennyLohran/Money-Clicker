import styles from './Updates.module.css';

import { motion } from 'framer-motion';

import { FaBug } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

import ReactTooltip from 'react-tooltip';

export default function Updates() {
  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <div className={styles.container}>
        <ReactTooltip 
          place="top"
          multiline={true}
        />
        <p className={styles.title}>Notícias e <span>Atualizações</span></p>
        
        {/* v1.6.0 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>Previsão para Atualização v1.6.0</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Início do planejamento de um sistema secreto para ganhar dinheiro, aguardem!</li>
          <li>• Implantação de um sistema de investimento, você poderá investir o seu dinheiro e deixar rendendo.</li>
          <li>• Carregar seu save em outros navegadores ou trocar de saves com os amigos.</li>
          <li>• Novos upgrades especiais.</li>
          <li>• Novos upgrades especiais do renascimento.</li>
          <li>• Novas melhorias douradas.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.5.0 */}

        <div className={styles.versionContainer}>
          <p data-tip="Este ícone representa<br>a Versão Atual" className={styles.atual}><MdVerified /></p>
          <p className={styles.version}>v1.5.0 - 16/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Atenção caso não seja sua primeira vez jogando, <span className={styles.textBold}>talvez</span> esta atualização possa requerer um <span className={styles.textBold}>reset geral de progresso</span> para melhor experiência, porém somente caso encontre bugs ou problemas durante a gameplay.</li>
          <br></br>
          <li>• Atualização com agradecimento especial para o Beta Tester <span className={styles.betaTester}>Nyox</span> que sugeriu o projeto de <span className={styles.textBold}>temas pagos</span>.</li>
          <li>• Novos upgrades na loja do Renascimento.</li>
          <li>• O botão de edição do canto superior esquerdo foi removido e agora possui uma página própria.</li>
          <li>• Sistema de temas e cores customizadas.</li>
          <li>• Melhorias especiais douradas foram adicionadas.</li>
          <li>• Nova formatação de valores para os upgrades e para os displays de valores.</li>
          <li>• 2 Novos upgrades comuns para GPS, GPC e MPC.</li>
          <p className={styles.bug}><FaBug />&nbsp;Correção de Problemas</p>
          <li>• Problema na animação de números subindo ao converter os bitcoins.</li>
          <li>• Aprimoramentos no algorítmo de save do jogo.</li>
          <li>• Correção na adaptabilidade da tela de renascimento.</li>
          <li>• Mudanças na adaptabilidade da loja.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.4.4 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.4.4 - 13/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Agora o Renascimento possui um limite de 300% por renascimento.</li>
          <p className={styles.bug}><FaBug />&nbsp;Correção de Problemas</p>
          <li>• Correção de problemas no sistema de save do Renascimento.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.4.3 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.4.3 - 13/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Novo sistema para realizar a animação dos números, o anterior apresentava pequenas falhas.</li>
          <p className={styles.bug}><FaBug />&nbsp;Correção de Problemas</p>
          <li>• Correção de problemas no sistema de save.</li>
          <li>• Melhorias no algoritmo e desempenho aprimorado.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.4.2 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.4.2 - 12/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Modificação no sistema de saves do jogo.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.4.1 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.4.1 - 11/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Pequenas modificações na adaptabilidade do jogo.</li>
          <li>• Mudanças do layout da mineração de Bitcoin.</li>
          <li>• O lucro por conversão de Bitcoin agora é 30% maior.</li>
          <li>• Pontos de renascimento adicionados ao jogo.</li>
          <li>• Loja de melhorias com pontos de renascimento (RN), os upgrades comprados com Pontos de Renascimento não são perdidos ao renascer, porém só podem ser comprados uma única vez.</li>
        </ul>
        <div className={styles.updateSeparator}></div>

        {/* v1.4.0 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.4.0 - Renascimento - 09/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Atenção caso não seja sua primeira vez jogando, esta atualização requer um <span className={styles.textBold}>reset geral de progresso</span> para melhor experiência.</li>
          <br></br>
          <li>• Atualização com agradecimento especial para o Beta Tester <span className={styles.betaTester}>ArthurVihOficial</span> que sugeriu o projeto <span className={styles.textBold}>renascimento</span> ainda no ínicio do jogo.</li>
          <li>• Finalmente chegou a Rebirth Update, agora você pode reiniciar o seu progresso com um bônus inicial que irá te ajudar muito.</li>
          <li>• Uma página de tutorial foi adicionada ao jogo para aqueles que tem um pouco mais de dificuldade de entender a mecânica do jogo.</li>
          <li>• Mudança na interface inicial, agora você pode ver o painel de bônus e o painel de multiplicadores.</li>
          <li>• O painel de Informações agora mostra a quantidade ganha em Bitcoin por Ciclo de mineração.</li>
          <li>• Uma barra lateral foi adicionada, agora somente os menus mais utilizados ficarão no topo.</li>
          <li>• Adicição de Bônus para o GPC, GPS e MPC.</li>
          <li>• Adicição de Multiplicador para o GPC, GPS e MPC.</li>
          <li>• Adicionada animação que mostra o valor de Bitcoins para Reais convertido subindo!</li>
          <li>• 3 novos upgrades especiais.</li>
          <li>• Balanceamento nos valores dos Upgrades.</li>
          <li>• Nível máximo de todos os upgrades aumentado para 300.</li>
          <p className={styles.bug}><FaBug />&nbsp;Correção de Problemas</p>
          <li>• Corrigido problema no qual o Bitcoin não podia ser convertido.</li>
          <li>• Correção no problema que não avisava quando o campo de conversão de Bitcoin estava vazio.</li>
        </ul>
        <div className={styles.updateSeparator}></div>

        {/* v1.3.1 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.3.1 - 05/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Novos menus contendo informações dos bônus.</li>
          <li>• Novas melhorias especiais adicionadas.</li>
          <li>• Alteração na ordem dos menus.</li>
          <li>• Novo botão que mostra informações detalhadas sobre o GPC, GPS e sobre os Bônus.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.3.0 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.3.0 - Melhorias Especiais - 01/09/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Adição de novos upgrades especiais ao jogo.</li>
          <li>• Pequenos ajustes no layout da loja.</li>
          <li>• Upgrade especial que melhora em 3% o lucro total do GPS.</li>
          <li>• Upgrade especial reduz o tempo de mineração em 30%.</li>
          <li>• Upgrade especial que melhora em 10% o lucro total do GPS.</li>
          <li>• Upgrade especial que dobra o lucro total de GPS.</li>
          <li>• Upgrade especial que dobra a conversão do Bitcoin.</li>
          <li>• Nível máximo do GPC aumentado para 70.</li>
          <li>• Novo upgrade de GPS, GPC e BPM adicionado!</li>
        </ul>
        <div className={styles.updateSeparator}></div>

        {/* v1.2.7 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.7 - 31/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Novos balões de notificação contendo avisos.</li>
          <li>• Pequenas tooltips (balões de texto contendo dicas) na loja do game.</li>
          <li>• Nova animação e tooltip ao passar o mouse por cima do ícone de versão atual.</li>
          <p className={styles.bug}><FaBug />&nbsp;Correção de Problemas</p>
          <li>• Corrigido pequeno problema que ocorria ao tentar resetar o progresso do jogo.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.2.6 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.6 - 31/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Alteração visual nos inputs do painel de Bitcoin.</li>
          <p className={styles.bug}><FaBug />&nbsp;Correção de Problemas</p>
          <li>• Problemas encontrados pelo Beta Tester <span className={styles.betaTester}>KnownAsBot</span></li>
          <br></br>
          <li>• O input que mostrava o valor do Bitcoin após a conversão estava sem a formatação correta.</li>
          <li>• Agora não é mais possível colocar sinais dentro do input de conversão de Bitcoin.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.2.5 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.5 - 31/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Balões de texto contendo alertas importantes.</li>
          <li>• Ao clicar no botão de investir uma nova animação foi implementada.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.2.4 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.4 - 30/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Novo sistema de display numérico, agora os números são mostrados com prefixos de acordo com o seu valor.</li>
          <li>• Botão adicionado no sistema de conversão de Bitcoins, o botão pega o valor total de Bitcoins que você possui e copia para o campo de conversão.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.2.3 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.3 - 30/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <p className={styles.bug}><FaBug/>&nbsp;Correção de Problemas</p>
          <li>• Corrigido problema na conversão de valores decimais do Bitcoin.</li>
          <li>• Otimização do sistema de animação dos números.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.2.2 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.2 - 30/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Balanceamento no sistema de Upgrade do MPC (Mineração por Clique).</li>
          <li>• A conversão de Bitcoin teve o valor reduzido em 50%.</li>
          <li>• O tempo para gerar Bitcoin foi reduzido em 30%.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.2.1 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.1 - 29/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Botão para resetar todo o progresso do jogo.</li>
          <p className={styles.bug}><FaBug/>&nbsp;Correção de Problemas</p>
          <li>• Corrigido problema no qual a animação dos números apresentava pequenos erros.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.2.0 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.2.0 - Bitcoin - 29/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Adição de ações com Bitcoin ao game.</li>
          <li>• 2 novos upgrades para o GPS (Ganho por Segundo) e para o GPC (Ganho por Clique).</li>
          <li>• Nível Máximo do GPS (Ganho por Segundo) aumentado para 100.</li>
          <li>• Nível Máximo do GPC (Ganho por Clique) aumentado para 60.</li>
          <li>• O multiplicador de valor de um upgrade para o outro do GPS e GPC foi reduzido de 1.16 para 1.09!</li>
          <li>• As novas atualizações agora aparecem no topo!</li>
          <p className={styles.bug}><FaBug/>&nbsp;Correção de Problemas</p>
          <li>• Adaptabilidade do menu de compras na loja.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.1.1 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.1.1 - 28/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Adaptabilidade para todos os dispositivos móveis.</li>
          <p className={styles.bug}><FaBug/>&nbsp;Correção de Problemas</p>
          <li>• O Display de dinheiro do menu de edição agora também tem animação.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.1.0 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.1.0 - 28/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Menu de Notícias e Atualizações adicionado, fique por dentro de todas as novidades!</li>
          <li>• Idioma nativo alterado para PT-BR (Português Brasileiro).</li>
          <li>• Adicionada animação no display de dinheiro.</li>
          <li>• Atualização nos valores da loja.</li>
          <li>• Adição dos itens de Ganho por Segundo na loja.</li>
          <li>• Nível máximo aumentado de 30 para 40.</li>
          <li>• Ao chegar no nível máximo além do background azul, o texto será alterado para MAX.</li>
        </ul>
        <div className={styles.updateSeparator}></div>
        
        {/* v1.0.0 */}

        <div className={styles.versionContainer}>
          <p className={styles.version}>v1.0.0 - 26/08/2022</p>
        </div>
        <ul className={styles.newsContainer}>
          <li>• Bem-vindo ao Money Clicker, é um prazer imenso ter você conosco, desde já gostaria de agradecer pelo apoio ao início do nosso projeto, o intuito deste jogo é puramente para entretenimento totalmente gratuito.</li>
          <li>• Ainda pretendo lançar diversas atualização para o jogo, porém por enquanto obrigado por fazer parte do nosso início.</li>
        </ul>
        <div className={styles.updateSeparator}></div>

      </div>
    </motion.div>
  );
}
import styles from './HowToPlay.module.css';

import { motion } from 'framer-motion';

import { FaShoppingCart, FaBtc } from 'react-icons/fa';

export default function HowToPlay() {
  return (
    <motion.div
      className={styles.container}
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <div className={styles.titleContainer}>
        <p className={styles.text}>Como esse jogo <span className={styles.textBold}>Funciona?</span></p>
      </div>

      <div className={styles.tutorialContainer}>
        <div className={styles.section}>
          <p className={styles.title}>O JOGO CONVERSA!</p>
          <p className={styles.dialogText}>Olá, se você chegou aqui talvez signifique que esteja um pouco confuso sobre como eu <span className={styles.textBold}>(o jogo)</span> funciono <span className={styles.textBold}>(sim eu converso com você)</span>, ou você só estava explorando o jogo mesmo, enfim caso tenha interesse em continuar para entender como eu funciono fica por aqui que vou te explicar como eu funciono.</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>COMO GERAR DINHEIRO?</p>
          <p className={styles.dialogText}>Ok vamos começar, sabe aquele botão azul escrito <span className={styles.textBold}>INVESTIR</span> lá na página Inicial?</p>
          <motion.button 
            className={styles.btnInvest}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          >
            INVESTIR
          </motion.button>
          <p className={styles.dialogText}>Então, a cada clique que você der nele você ganha uma quantia em dinheiro, o valor que você irá ganhar vai depender da quantidade de melhorias que você comprou na loja, porém no início você só ganha R$1,00 por clique, eu sei que é pouco mas você pode alcançar valores incríveis com muito esforço e força no dedo.</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>O QUE É GPC, GPS e MPC?</p>
          <p className={styles.dialogText}><span className={styles.textBold}>O GPC é o Ganho por Clique:</span> ele é o valor que você vai ganhar toda vez que clicar no botão azul Investir.</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>O GPS é o Ganho por Segundo:</span> a cada 1 segundo o valor do seu GPS será adicionado ao seu dinheiro.</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>O MPC é a Mineração por Clique:</span> a cada ciclo de mineração ou seja toda vez que a barrinha de progresso atingir 100% este valor será adicionado ao seu saldo de Bitcoin.</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>QUAL O OBJETIVO?</p>
          <p className={styles.dialogText}>Boa pergunta, vamos lá, se você reparar ali encima ou no menu lateral existe um carrinho.</p>
          <div className={styles.topIcon}>
            {<FaShoppingCart/>}
          </div>
          <p className={styles.dialogText}>Esse carrinho é a loja de melhorias do jogo, o seu objetivo é conseguir dinheiro para comprar melhorias e conseguir mais dinheiro ainda, simples não é mesmo? Futuramente o meu desenvolvedor o Lohran vai adicionar novas funcionalides para que você possa investir o seu precioso dinheirinho!</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>O QUE É MINERAR BITCOIN?</p>
          <p className={styles.dialogText}>Assim como o carrinho da loja o centro de mineração de Bitcoin também tem um ícone localizado lá encima, como você pode notar os menus que você mais vai utilizar estarão ali encima.</p>
          <div className={styles.topIcon}>
            {<FaBtc/>}
          </div>
          <p className={styles.dialogText}>Para minerar na central de Bitcoins é simples, basta clicar no botão de minerar, uma barrinha de progresso vai começar a aumentar, quando ela chegar em 100% você irá receber o valor minerado em sua carteira de Bitcoins, em seguida você poderá converter os seus Bitcoins, basta colocar a quantidade que deseja converter e clicar em converter, certifique-se de ter a quantidade digitada na carteira, a e caso esteja com preguiça de digitar basta clicar no botão copiar, ele copia toda a sua quantia em Bitcoin para o campo de conversão.</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>COMO FUNCIONA O RENASCIMENTO?</p>
          <p className={styles.dialogText}>A central de renascimento é bem simples, você irá perder todo o progresso do jogo porém o bônus adquirido será aplicado, caso queira renascer novamente o bônus anterior será somado ao atual, ou seja você pode renascer quantas vezes quiser e ir acumulando todos os seus bônus, eu pessoalmente recomendo você esperar conseguir uma boa quantia de bônus antes de renascer.</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>Atenção:</span> Os upgrades comprados com RN (Abreviação dos pontos de Renascimento) nunca serão perdidos ao renascer, porém não poderão ser comprados mais de uma vez!</p>
        </div>
        
      </div>
    </motion.div>
  );
}
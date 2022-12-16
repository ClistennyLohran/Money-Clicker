import styles from './HowToPlay.module.css';

import { motion } from 'framer-motion';

import { FaShoppingCart, FaBtc } from 'react-icons/fa';
import { GiBookPile } from 'react-icons/gi';

export default function HowToPlay() {
  return (
    <motion.div
      className={styles.container}
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <div className={styles.titleContainer}>
        <p className={styles.text}>{<GiBookPile/>}&nbsp;TUTORIAL&nbsp;{<GiBookPile/>}</p>
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
          <p className={styles.title}>O QUE É GPC, GPS e XPC?</p>
          <p className={styles.dialogText}><span className={styles.textBold}>O GPC é o Ganho por Clique:</span> ele é o valor que você vai ganhar toda vez que clicar no botão azul Investir.</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>O GPS é o Ganho por Segundo:</span> a cada 1 segundo o valor do seu GPS será adicionado ao seu dinheiro.</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>O XPC é o XP por Clique:</span> a cada clique que você der no botão azul Investir, você irá ganhar uma quantidade de XP.</p>
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
          <p className={styles.dialogText}>O sistema de mineração de bitcoin é uma forma alternativa de ganhar dinheiro, eu diria que é até divertido.</p>
          <div className={styles.topIcon}>
            {<FaBtc/>}
          </div>
          <p className={styles.dialogText}>Para minerar bitcoins é muito simples, você começa com um valor de $800,00 isso mesmo, estamos falando de dólares aqui, a sua empresa de mineração está localizada em algum lugar dos EUA, este valor inicial é suficiente para comprar o seu primeiro gerador de energia e a sua primeira placa de vídeo, após comprar os dois a sua produção de bitcoins irá começar!<br></br><br></br>Mas tome muito cuidado, fique sempre atento na temperatura ela não pode ser nem muito baixa e nem muito alta, o mesmo vale para o consumo de energia, evite ao máximo usar além do que você pode gerar.<br></br><br></br>Após minerar bastante bitcoins você poderá converter para dólares, após converter você poderá investir em novos equipamentos, você também pode converter o seu dinheiro ganho em dólares para reais!<br></br><br></br>O sistema de mineração manual é tão simples quanto aparenta ser, você pode minerar clicando no botão azul e quando alcançar um valor mínimo de 0.00001000 você podera enviar seus bitcoins minerados manualmente para a sua quantia total de Bitcoins.</p>
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
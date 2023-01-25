import styles from './HowToPlay.module.css';

import { motion } from 'framer-motion';

import { AiFillYoutube } from 'react-icons/ai';
import { FaShoppingCart, FaBtc } from 'react-icons/fa';
import { BsChatTextFill } from 'react-icons/bs';
import { GiBookPile, GiReceiveMoney, GiHeartburn, GiGoldMine, GiStairsGoal, GiPokerHand } from 'react-icons/gi';
import { RiTimerFill } from 'react-icons/ri';
import NomePagina from '../../components/NomePagina/NomePagina';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

export default function HowToPlay() {
  return (
    <motion.div
      className={styles.container}
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <AbrirMenuEfeito/>
      <NomePagina icon={<GiBookPile/>} name="TUTORIAL"/>
      
      <div className={styles.tutorialContainer}>
        <div className={styles.section}>
          <p className={styles.title}><AiFillYoutube/>&nbsp;TUTORIAL EM VÍDEO!&nbsp;<AiFillYoutube/></p>
          <p className={styles.dialogText}>Bateu aquela preguiça de ler? Eu te entendo, mas eu pensei em você!</p>
          <a className={styles.gameLink} href="https://youtu.be/ebfR4TTVKzc" target="_blank"><p>Clique aqui para assistir o tutorial em vídeo!</p></a>
        </div>

        <div className={styles.section}>
          <p className={styles.title}><BsChatTextFill/>&nbsp;O JOGO CONVERSA!&nbsp;<BsChatTextFill/></p>
          <p className={styles.dialogText}>Como eu posso explicar isso?... Já ouviu falar em quarta parede? Digamos que eu tento quebrar ela conversando com você ou comentando algumas coisas durante o jogo, e é simplesmente isso, eu não vou literalmente conversar com você, sabe? Pelo menos não ainda... Eu sei que tem muita gente que não gosta de ler, então em breve vou fazer um canal no Youtube explicando tudo em vídeo, até lá recomendo que pegue um óculos e boa leitura ^^</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}><GiReceiveMoney/>&nbsp;COMO GERAR DINHEIRO?&nbsp;<GiReceiveMoney/></p>
          <p className={styles.dialogText}>Ok vamos começar, sabe aquele botão azul escrito <span className={styles.textBold}>INVESTIR</span> lá na página Inicial?</p>
          <motion.button 
            className={styles.btnInvest}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          >
            INVESTIR
          </motion.button>
          <p className={styles.dialogText}>Então, a cada clique que você der nele você ganha uma quantia em dinheiro, o valor que você irá ganhar vai depender da quantidade de melhorias que você comprou na loja, porém no início você só ganha R$1,00 por clique, eu sei que é pouco, mas você pode alcançar valores incríveis com muito esforço e força no dedo.</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}><RiTimerFill/>&nbsp;O QUE É GPC, GPS e XPC?&nbsp;<RiTimerFill/></p>
          <p className={styles.dialogText}><span className={styles.textBold}>O GPC é o Ganho por Clique:</span> ele é o valor que você vai ganhar toda vez que clicar no botão azul Investir.</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>O GPS é o Ganho por Segundo:</span> a cada 1 segundo o valor do seu GPS será adicionado ao seu dinheiro.</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>O XPC é o XP por Clique:</span> a cada clique que você der no botão azul Investir, você irá ganhar uma quantidade de XP.</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}><GiStairsGoal/>&nbsp;QUAL O OBJETIVO?&nbsp;<GiStairsGoal/></p>
          <p className={styles.dialogText}>Boa pergunta, vamos lá, se você reparar ali encima ou no menu lateral existe um carrinho.</p>
          <div className={styles.topIcon}>
            {<FaShoppingCart/>}
          </div>
          <p className={styles.dialogText}>Esse carrinho é a loja de melhorias do jogo, o seu objetivo é conseguir dinheiro para comprar melhorias e conseguir mais dinheiro ainda, simples não é mesmo? Futuramente o meu desenvolvedor o Lohran vai adicionar novas funcionalidades para que você possa investir o seu precioso dinheirinho!</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}><GiGoldMine/>&nbsp;O QUE É MINERAR BITCOIN?&nbsp;<GiGoldMine/></p>
          <p className={styles.dialogText}>O sistema de mineração de bitcoin é uma forma alternativa de ganhar dinheiro, eu diria que é até divertido.</p>
          <div className={styles.topIcon}>
            {<FaBtc/>}
          </div>
          <p className={styles.dialogText}>Para minerar bitcoins é muito simples, você começa com um valor de $800,00 isso mesmo, estamos falando de dólares aqui, a sua empresa de mineração está localizada em algum lugar dos EUA, este valor inicial é suficiente para comprar o seu primeiro gerador de energia e a sua primeira placa de vídeo, após comprar os dois a sua produção de bitcoins irá começar!<br></br><br></br>Mas tome muito cuidado, fique sempre atento na temperatura ela não pode ser nem muito baixa e nem muito alta, o mesmo vale para o consumo de energia, evite ao máximo usar além do que você pode gerar.<br></br><br></br>Após minerar bastante bitcoins você poderá converter para dólares, após converter você poderá investir em novos equipamentos, você também pode converter o seu dinheiro ganho em dólares para reais!<br></br><br></br>O sistema de mineração manual é tão simples quanto aparenta ser, você pode minerar clicando no botão azul e quando alcançar um valor mínimo de 0.00001000 você poderá enviar seus bitcoins minerados manualmente para a sua quantia total de Bitcoins.</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}><GiHeartburn/>&nbsp;COMO FUNCIONA O RENASCIMENTO?&nbsp;<GiHeartburn/></p>
          <p className={styles.dialogText}>A central de renascimento é bem simples, você irá perder todo o progresso do jogo, porém o bônus adquirido será aplicado, caso queira renascer novamente o bônus anterior será somado ao atual, ou seja, você pode renascer quantas vezes quiser e ir acumulando todos os seus bônus, eu pessoalmente recomendo você esperar conseguir uma boa quantia de bônus antes de renascer, o Bônus aumenta conforme o seu dinheiro aumenta, quanto mais dinheiro você tiver maior a quantidade de bônus de você vai ganhar, até chegar ao limite de 300%</p>
          <br></br>
          <p className={styles.dialogText}><span className={styles.textBold}>Atenção:</span> Os upgrades comprados com RN (Abreviação dos pontos de Renascimento) nunca serão perdidos ao renascer, porém, não poderão ser comprados mais de uma vez!</p>
        </div>

        <div className={styles.section}>
          <p className={styles.title}><GiPokerHand/>&nbsp;O QUE É O CASSINO?&nbsp;<GiPokerHand/></p>
          <p className={styles.dialogText}>Bom basicamente é uma forma de você ganhar dinheiro apostando, afinal, qual empreendedor não gosta de correr riscos? Por enquanto o cassino só tem um único jogo, o Tudo ou Nada, como ele funciona? Calma ai que vou explicar.</p>
          <br></br>
          <p className={styles.title}>TUDO OU NADA</p>
          <p className={styles.dialogText}>Você começa apostando um valor, qualquer valor que você desejar, após digitar o valor que deseja apostar você clica em iniciar e espera um contador de 10 segundos terminar para o início do Tudo ou Nada, a partir do momento que você inicia, um multiplicador 1.00x começa a subir, o valor apostado vai ser multiplicado por esse carinha que vai subindo aos poucos, e é aí que mora o risco, você nunca sabe quando ele vai parar, pode parar em 2.00x, 3.34x, 220.00x ou pode parar no 1.00x e você perder tudo instantaneamente... Caso você queira apostar de forma automática você pode preencher o outro campo com o valor que você deseja que o saque automático seja realizado, por exemplo 1.20x se o multiplicador chegar em 1.20x ele retira automaticamente.</p>
        </div>
        
      </div>
    </motion.div>
  );
}
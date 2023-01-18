import styles from './RedesSociais.module.css';

import { motion } from 'framer-motion';
import NomePagina from '../../components/NomePagina/NomePagina';
import NomeSessao from '../../components/NomeSessao/NomeSessao';

import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { GiGoldBar } from 'react-icons/gi';
import { ImFacebook2 } from 'react-icons/im';
import { FaPatreon } from 'react-icons/fa';
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import InviteImage from '../../img/moneyclickerinvite.png';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

export default function RedesSociais() {
  return (
    <motion.div className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <AbrirMenuEfeito/>
      <NomePagina icon={<BsFillChatDotsFill/>} name="COMUNIDADE" />
      <div className={styles.introContainer}>
        <p className={styles.text}>Venha fazer parte da nossa comunidade! Esperamos que você possa fazer novos amigos, dar sugestões, participar de eventos e muitos mais, tudo isso com apenas um clique, e vamos combinar que clicar vai ser o menor dos problemas pra você...</p>
      </div>
      <NomeSessao icon={<HiMail/>} title="CONVITE DISCORD" />
      <div className={styles.conviteContainer}>
        <div className={styles.topBoxText}>
          <p className={styles.title}>VOCÊ RECEBEU UM CONVITE PARA ENTRAR NO SERVIDOR</p>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.imageBox}>
            <div className={styles.imageContainer}>
              <img className={styles.inviteImage} src={InviteImage}></img>
            </div>
          </div>
          <div className={styles.textBox}>
            <p className={styles.textBoxTitle}>Money Clicker&nbsp;<GiGoldBar/></p>
            <p className={styles.textBoxContent}><span className={styles.hashtag}>#</span> 「🤍」-bem-vindo</p>
          </div>
          <div className={styles.buttonBox}>
            <a target="_blank" href="https://discord.gg/fGCD4vUsey"><motion.button className={styles.joinButton} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} >Entrar</motion.button></a>
          </div>
        </div>
      </div>
      <NomeSessao icon={<ImFacebook2/>} title="REDES SOCIAIS" />
      <p className={styles.text}>Acompanhe nossas redes sociais e fique por dentro dos eventos e novidades!<br></br>Você também pode contribuir para o desenvolvimento do jogo através do Patreon.</p>
      <div className={styles.socialMediaContainer}>
        <div className={styles.socialMediaBox}>
          <a className={styles.socialMediaLink} href="https://www.facebook.com/profile.php?id=100089821470701&sk=about_contact_and_basic_info" target="_blank"><ImFacebook2/></a>
        </div>
        <div className={styles.socialMediaBox}>
          <a className={styles.socialMediaLink} href="patreon.com/moneyclicker" target="_blank"><FaPatreon/></a>
        </div>
        <div className={styles.socialMediaBox}>
          <a className={styles.socialMediaLink} href="https://www.youtube.com/@LohranBM/featured" target="_blank"><AiFillYoutube/></a>
        </div>
        <div className={styles.socialMediaBox}>
          <a className={styles.socialMediaLink} href="https://github.com/ClistennyLohran" target="_blank"><AiFillGithub/></a>
        </div>
        <div className={styles.socialMediaBox}>
          <a className={styles.socialMediaLink} href="https://www.linkedin.com/in/cl%C3%ADstennylohran/" target="_blank"><AiFillLinkedin/></a>
        </div>
      </div>
    </motion.div>
  );
}
import styles from './Upgrade.module.css';

import { motion } from 'framer-motion';

import BalanceDisplay from "../../components/BalanceDisplay/BalanceDisplay";
import UpgradeContainer from '../../components/UpgradeContainer/UpgradeContainer';
import EarnPerClick from '../../components/CompUpgrades/EarnPerClick/EarnPerClick';
import EarnPerSecond from '../../components/CompUpgrades/EarnPerSecond/EarnPerSecond';
import MinePerClick from '../../components/CompUpgrades/MinePerClick/MinePerClick';
import SpecialUpgrades from '../../components/SpecialUpgrades/SpecialUpgrades';
import SpecialUpgradeItem from '../../components/CompUpgrades/SpecialUpgradeItem/SpecialUpgradeItem';

import { GiArrowCursor, GiGalaxy, GiClockwork, GiFastArrow, GiCoins, GiWingfoot, GiCoinsPile, GiImpactPoint, GiGoldBar, GiMineWagon } from 'react-icons/gi';
import { RiTimerFlashFill } from 'react-icons/ri';
import { HiCursorClick } from 'react-icons/hi';
import { MdAdsClick, MdShutterSpeed } from 'react-icons/md';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { AiFillHdd, AiTwotoneThunderbolt } from 'react-icons/ai';
import { TbClick, TbBoxMultiple4, TbClock2 } from 'react-icons/tb';
import { IoMdClock } from 'react-icons/io';
import { SiBitcoinsv } from 'react-icons/si';

import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { RebirthUpgradeContext } from '../../contexts/RebirthUpgradeContext/RebirthUpgradeContext';
import { UpgradeContext } from '../../contexts/UpgradeContext/UpgradeContext';
import { BuyContext } from '../../contexts/BuyContext/BuyContext';

export default function Upgrade() {
  const { 
    upgrade01, 
    upgrade02, 
    upgrade03, 
    upgrade04, 
    upgrade05, 
    upgrade06, 
    upgrade07, 
    upgrade08, 
    upgrade09, 
    upgrade10, 
    upgrade11, 
    upgrade12,
    upgrade13,
    upgrade14,
    upgrade15,
    upgrade16,
  } = useContext(BuyContext);
  const { generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);

  const { 
    rebirthUpgrade1,
    rebirthUpgrade2,
    rebirthUpgrade3,
    rebirthUpgrade4,
    rebirthUpgrade5,
    rebirthUpgrade6,
  } = useContext(RebirthUpgradeContext);

  /* Objeto de Upgrades Especiais */
  var specialUpgrades = [
    {
      id: '1',
      active: upgrade01,
      title: 'Mouse Gamer',
      value: 10000.0,
      description: 'Você irá ganhar +3% por cada clique! Não sei você, mas eu gostei desse upgrade.',
      icon: <GiArrowCursor/>,
      classId: 0
    }, {
      id: '2',
      active: upgrade02,
      title: 'Placa de Vídeo RX570',
      value: 150000.0,
      description: 'O tempo de mineração cai -30%, isso me parece um baita investimento, o que você me diz?',
      icon: <RiTimerFlashFill/>,
      classId: 0
    }, {
      id: '3',
      active: upgrade03,
      title: 'Clique Multidimensional',
      value: 600000.0,
      description: 'Agora você ganha +10% por cada clique, ta vendo aquele botão de comprar ali? Clica nele vai...',
      icon: <HiCursorClick/>,
      classId: 0
    }, {
      id: '4',
      active: upgrade04,
      title: 'Duplicador de Cliques',
      value: 2500000.0,
      description: 'Você agora ganha o dobro por cada clique, vale a pena juntar 1 milhão.',
      icon: <MdAdsClick/>,
      classId: 0
    }, {
      id: '5',
      active: upgrade05,
      title: 'Duplicador de Bitcoins',
      value: 5000000.0,
      description: 'Você ganha o dobro de bitcoins, eu acho que 5 milhões ainda foi barato... O desenvolvedor desse jogo tá com dó.',
      icon: <BsCurrencyBitcoin/>,
      classId: 0
    }, {
      id: '6',
      active: upgrade06,
      title: 'Central de Servidores',
      value: 20000000.0,
      description: 'Agora você ganha 5% a mais de GPS, parece que alguém tá evoluindo né, 10 milhões uau...',
      icon: <AiFillHdd/>,
      classId: 0
    }, {
      id: '7',
      active: upgrade07,
      title: 'Cliques Divinos',
      value: 50000000.0,
      description: 'Agora você ganha +20% de GPC, dinheiro não é mais um problema certo?',
      icon: <TbClick/>,
      classId: 0
    }, {
      id: '8',
      active: upgrade08,
      title: 'Processadores Quânticos',
      value: 75000000.0,
      description: 'Agora você ganha +30% a mais de GPS, é disso que eu tava falando, bem vindo ao futuro! Processador quântico? Eu vivi pra ver isso.',
      icon: <IoMdClock/>,
      classId: 0
    }, {
      id: '9',
      active: upgrade09,
      title: 'Placa de Vídeo RTX 3060 TI',
      value: 135000000.0,
      description: 'Tempo de mineração reduzido para -60%, olha só quem conseguiu uma RTX, confesso que sinto um pouco de inveja.',
      icon: <SiBitcoinsv/>,
      classId: 0
    }, {
      id: '10',
      active: upgrade10,
      title: 'Multiverso',
      value: 350000000.0,
      description: 'Você falou consigo mesmo do Multiverso e ele resolveu fazer a bondade de doar o GPS dele para você! Agora você ganha 2x mais GPS.',
      icon: <GiGalaxy/>,
      classId: 0
    }, {
      id: '11',
      active: upgrade11,
      title: 'Placa de Vídeo RTX 3090 TI',
      value: 850000000.0,
      description: 'Você conversou com o desenvolvedor do Bitcoin e ao invés de encurtar o tempo de mineração você decidiu aumentar a quantidade ganha por ciclo em 60%',
      icon: <MdShutterSpeed/>,
      classId: 0
    }, {
      id: '12',
      active: upgrade12,
      title: 'Mouse Quântico',
      value: 2000000000.0,
      description: 'Agora o seu GPC é multiplicado por 4, você tá chegando longe em, estou sentindo muito orgulho do seu desempenho.',
      icon: <TbBoxMultiple4/>,
      classId: 0
    }, {
      id: '13',
      active: upgrade13,
      title: 'Golden Clock',
      value: 5000000000.0,
      description: 'Multiplica o seu GPS por 8x, você está alcançando patamares que eu jamais imaginaria.',
      icon: <TbClock2/>,
      classId: 2
    }, {
      id: '14',
      active: upgrade14,
      title: 'Golden Click',
      value: 10000000000.0,
      description: 'Multiplica o seu GPC por 8x, um mouse dourado não acha que ta ostentando muito não? Nada contra claro.',
      icon: <GiImpactPoint/>,
      classId: 2
    }, {
      id: '15',
      active: upgrade15,
      title: 'Golden Coin',
      value: 25000000000.0,
      description: 'Multiplica o seu MPC por 8x, e eu achei que você tava ostentando antes, placas de vídeo douradas? Uau cara, que inveja.',
      icon: <GiGoldBar/>,
      classId: 2
    }, {
      id: '16',
      active: upgrade16,
      title: 'Golden RTX 4090 TI',
      value: 75000000000.0,
      description: 'O seu tempo de mineração de Bitcoins agora é reduzido para -90%, está bem perto da mineração instantânea! Woops, acho que dei spoiler de um upgrade futuro.',
      icon: <GiMineWagon/>,
      classId: 2
    }
  ];

  /* Objeto de Upgrades do Renascimento */
  var specialRebirthUpgrades = [
    {
      id: '1000',
      active: rebirthUpgrade1,
      title: 'Mega Bônus de GPS',
      value: 1,
      description: 'Aumenta em 150% o bônus do GPS permanentemente, gente tô impressionado, vou nem dizer se vale a pena, SÓ COMPRA.',
      icon: <GiClockwork/>,
      classId: 1
    }, {
      id: '1001',
      active: rebirthUpgrade2,
      title: 'Mega Bônus de GPC',
      value: 1,
      description: 'Aumenta em 150% o bônus do GPC permanentemente, esse aqui também é bem legal, agora tô em dúvida de qual você deveria comprar.',
      icon: <GiFastArrow/>,
      classId: 1
    }, {
      id: '1002',
      active: rebirthUpgrade3,
      title: 'Mega Bônus de MPC',
      value: 1,
      description: 'Aumenta em 150% o bônus do MPC permanentemente, mas que decisão difícil em, cada furada que esse Desenvolvedor coloca a gente.',
      icon: <GiCoins/>,
      classId: 1
    }, {
      id: '1003',
      active: rebirthUpgrade4,
      title: 'Bônus por Nível GPS',
      value: 2,
      description: 'Você ganhará um bônus de 0.10% pelo total de upgrades GPS que você tiver comprado, todos que você já comprou serão considerados!',
      icon: <GiWingfoot/>,
      classId: 1
    }, {
      id: '1004',
      active: rebirthUpgrade5,
      title: 'Bônus por Nível GPC',
      value: 2,
      description: 'Você ganhará um bônus de 0.05% pelo total de upgrades GPC que você tiver comprado, todos que você já comprou serão considerados!',
      icon: <AiTwotoneThunderbolt/>,
      classId: 1
    }, {
      id: '1005',
      active: rebirthUpgrade6,
      title: 'Bônus por Nível MPC',
      value: 2,
      description: 'Você ganhará um bônus de 0.15% pelo total de upgrades MPC que você tiver comprado, todos que você já comprou serão considerados!',
      icon: <GiCoinsPile/>,
      classId: 1
    }
  ];

  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <UpgradeContext.Provider value={{ generalUpgrades, setGeneralUpgrades }}>
        <div className={styles.container}>
          <p className={styles.title}>Loja de <span>Melhorias</span></p>
          <BalanceDisplay/>
          <div className={styles.specialGridContainer}>
            <SpecialUpgrades title="Melhorias" boldTitle="Especiais">
              {specialUpgrades.map(item => {
                return (
                  <SpecialUpgradeItem type={0} classId={item.classId} tooltip={item.tooltip} key={item.id} id={item.id} title={item.title} active={item.active} description={item.description} icon={item.icon} value={item.value} />
                );
              })}
            </SpecialUpgrades>
            <SpecialUpgrades title="Melhorias do" boldTitle="Renascimento">
              {specialRebirthUpgrades.map(item => {
                return (
                  <SpecialUpgradeItem type={1} classId={item.classId} tooltip={item.tooltip} key={item.id} id={item.id} title={item.title} active={item.active} description={item.description} icon={item.icon} value={item.value} />
                );
              })}
            </SpecialUpgrades>
          </div>
          <div className={styles.gridContainer}>
            <UpgradeContainer title="Ganho por" titleBold="Segundo" >
              {generalUpgrades[0].map(item => {
                return (
                  <EarnPerSecond key={item.id} list={0} item={item} maxLevel={300} />
                );
              })}
            </UpgradeContainer>
            <UpgradeContainer title="Ganho por" titleBold="Clique" >
              {generalUpgrades[1].map(item => {
                return (
                  <EarnPerClick key={item.id} list={1} item={item} maxLevel={300} />
                );
              })}
            </UpgradeContainer>
            <UpgradeContainer title="Mineração por" titleBold="Ciclo" >
              {generalUpgrades[2].map(item => {
                return (
                  <MinePerClick key={item.id} list={2} item={item} maxLevel={300} />
                );
              })}
            </UpgradeContainer>
          </div>
        </div>
      </UpgradeContext.Provider>
    </motion.div>
  );
}
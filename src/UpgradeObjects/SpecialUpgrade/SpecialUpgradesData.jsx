import { GiArrowCursor, GiGalaxy, GiImpactPoint, GiAlarmClock, GiDoubleRingedOrb, GiOrbitalRays, GiOrbital } from 'react-icons/gi';
import { HiCursorClick } from 'react-icons/hi';
import { MdAdsClick } from 'react-icons/md';
import { AiFillHdd } from 'react-icons/ai';
import { TbClick, TbBoxMultiple4, TbClock2 } from 'react-icons/tb';
import { IoMdClock } from 'react-icons/io';

export const icons = [
  {
    id: 0,
    title: 'Mouse Gamer',
    icon: <GiArrowCursor/>,
    description: 'Você irá ganhar +20% por cada clique! Não sei você, mas eu gostei desse upgrade.',
  }, {
    id: 1,
    title: 'Relógio Prateado',
    icon: <GiAlarmClock/>,
    description: 'Seu GPS será multiplicado por 2, sinceramente eu só consigo ver vantagens.',
  }, {
    id: 2,
    title: 'Orbs de XP Aprimorados',
    icon: <GiOrbitalRays/>,
    description: 'O XPC agora é dobrado, tenta não destruir o mouse pra subir de nível...',
  }, {
    id: 3,
    title: 'Clique Multidimensional',
    icon: <HiCursorClick/>,
    description: 'Agora você ganha +40% por cada clique, ta vendo aquele botão de comprar ali? Clica nele vai...',
  }, { // Esse q vou modificar
    id: 4,
    title: 'Gerador de XP',
    icon: <GiOrbital/>,
    description: 'Você ganha um boost e +30% na quantidade de XPC, já é alguma coisa, eu diria melhor do que nada.',
  },{
    id: 5,
    title: 'Duplicador de Cliques',
    icon: <MdAdsClick/>,
    description: 'Seu GPC será multiplicado por 2, vale a pena juntar 1 milhão.',
  }, {
    id: 6,
    title: 'Central de Servidores',
    icon: <AiFillHdd/>,
    description: 'Agora você ganha 20% a mais de GPS, parece que alguém tá evoluindo né, 10 milhões uau...',
  }, {
    id: 7,
    title: 'Cliques Divinos',
    icon: <TbClick/>,
    description: 'Agora você ganha +60% de GPC, dinheiro não é mais um problema certo?',
  }, {
    id: 8,
    title: 'Processadores Quânticos',
    icon: <IoMdClock/>,
    description: 'Agora você ganha +60% a mais de GPS, é disso que eu tava falando, bem vindo ao futuro! Processador quântico? Eu vivi pra ver isso.',
  }, {
    id: 9,
    title: 'Orbs de XP Quadruplicados',
    icon: <GiDoubleRingedOrb/>,
    description: 'Agora o seu XPC será multiplicado por 4, agora tá fácil subir de nível, para de facilitar DEV.',
  }, {
    id: 10,
    title: 'Multiverso',
    icon: <GiGalaxy/>,
    description: 'Você falou consigo mesmo de 3 Multiversos e eles resolveram fazer a bondade de doar o GPS dele para você! Agora você ganha 4x mais GPS, que pessoal legal né?',
  }, {
    id: 11,
    title: 'Mouse Quântico',
    icon: <TbBoxMultiple4/>,
    description: 'Agora o seu GPC é multiplicado por 4, você tá chegando longe em, estou sentindo muito orgulho do seu desempenho.',
  }, {
    id: 12,
    title: 'Golden Clock',
    icon: <TbClock2/>,
    description: 'Multiplica o seu GPS por 8x, você está alcançando patamares que eu jamais imaginaria.',
  }, {
    id: 13,
    title: 'Golden Click',
    icon: <GiImpactPoint/>,
    description: 'Multiplica o seu GPC por 8x, um mouse dourado não acha que ta ostentando muito não? Nada contra claro.',
  }
]
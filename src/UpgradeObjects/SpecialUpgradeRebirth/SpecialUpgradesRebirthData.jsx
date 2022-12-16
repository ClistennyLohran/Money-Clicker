import { GiClockwork, GiFastArrow, GiWingfoot, GiBubbles, GiBurningEye } from 'react-icons/gi';
import { AiTwotoneThunderbolt } from 'react-icons/ai';

export const icons = [
  {
    id: 0,
    title: 'Mega Bônus de GPS',
    icon: <GiClockwork/>,
    description: 'Aumenta em 300% o bônus do GPS permanentemente, gente tô impressionado, vou nem dizer se vale a pena, SÓ COMPRA.',
  }, {
    id: 1,
    title: 'Mega Bônus de GPC',
    icon: <GiFastArrow/>,
    description: 'Aumenta em 300% o bônus do GPC permanentemente, esse aqui também é bem legal, agora tô em dúvida de qual você deveria comprar.',
  }, { // Esse aqui
    id: 2,
    title: 'Mega Bônus de XPC',
    icon: <GiBubbles/>,
    description: 'Aumenta em 300% o bônus do XPC permanentemente, um bônus de XP permanente? Me parece bem interessante.',
  }, {
    id: 3,
    title: 'Bônus por Nível GPS',
    icon: <GiWingfoot/>,
    description: 'Você ganhará um bônus de 1.0% pelo total de upgrades GPS que você tiver comprado, todos que você já comprou serão considerados!',
  }, {
    id: 4,
    title: 'Bônus por Nível GPC',
    icon: <AiTwotoneThunderbolt/>,
    description: 'Você ganhará um bônus de 0.5% pelo total de upgrades GPC que você tiver comprado, todos que você já comprou serão considerados!',
  }, {
    id: 5,
    title: 'Bônus por Nível XPC',
    icon: <GiBurningEye/>,
    description: 'Você ganhará um bônus de 0.3% pelo total de upgrades GPS e GPC que você tiver comprado, todos que você já comprou serão considerados!',
  }
]
import { GiClockwork, GiFastArrow, GiWingfoot } from 'react-icons/gi';
import { AiTwotoneThunderbolt } from 'react-icons/ai';

export const icons = [
  {
    id: 0,
    title: 'Mega Bônus de GPS',
    icon: <GiClockwork/>,
    description: 'Aumenta em 150% o bônus do GPS permanentemente, gente tô impressionado, vou nem dizer se vale a pena, SÓ COMPRA.',
  }, {
    id: 1,
    title: 'Mega Bônus de GPC',
    icon: <GiFastArrow/>,
    description: 'Aumenta em 150% o bônus do GPC permanentemente, esse aqui também é bem legal, agora tô em dúvida de qual você deveria comprar.',
  }, {
    id: 2,
    title: 'Bônus por Nível GPS',
    icon: <GiWingfoot/>,
    description: 'Você ganhará um bônus de 0.10% pelo total de upgrades GPS que você tiver comprado, todos que você já comprou serão considerados!',
  }, {
    id: 3,
    title: 'Bônus por Nível GPC',
    icon: <AiTwotoneThunderbolt/>,
    description: 'Você ganhará um bônus de 0.05% pelo total de upgrades GPC que você tiver comprado, todos que você já comprou serão considerados!',
  }
]
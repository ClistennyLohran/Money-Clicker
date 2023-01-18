import { useEffect } from "react";

import MenuOpenEffect from '../../songs/MenuSwitchFade.mp3';

export default function AbrirMenuEfeito() {
  
  useEffect(() => {
    let MenuOpen = new Audio(MenuOpenEffect);

    MenuOpen.play();
  }, []);
  
  return (
    <></>
  );
}
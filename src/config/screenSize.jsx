import { useEffect, useState } from "react";

const screenSize = () => {
  // Obtenir la largeur de l'écran
  const width = window.innerWidth;

  // Définir les tailles d'écran
  const xs = 576;
  const sm = 768;
  const md = 992;
  const lg = 1200;
  // const xl = 1440;

  // Comparer la largeur de l'écran aux tailles d'écran définies
  if (width < xs) {
    return "XS";
  } else if (width < sm) {
    return "SM";
  } else if (width < md) {
    return "MD";
  } else if (width < lg) {
    return "LG";
  } else {
    return "XL";
  }
}

const Screen = () => {
  const [size, setSize] = useState(screenSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(screenSize());
    };
  
    // Écouter l'événement de changement de taille d'écran
    window.addEventListener('resize', handleResize);
  
    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return size;
}

export {screenSize};
export default Screen;

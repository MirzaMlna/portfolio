import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke posisi paling atas
  }, [pathname]); // Akan dipicu setiap kali path berubah

  return null;
};

export default ScrollToTop;

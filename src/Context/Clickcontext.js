import { createContext, useState } from "react";
export let ClickContext = createContext();

function ClickcontextProvider(props) {

    const [activeLink, setActiveLink] = useState("/");

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  

    const handleLinkClick = (link) => {
        setActiveLink(link);
        window.scrollTo(0, 0);
        if (isOpen) {
          toggleMenu();

    };
  }
    
    return (
        <ClickContext.Provider value={{ activeLink, setActiveLink,handleLinkClick,isOpen,toggleMenu }}>
          {props.children}
        </ClickContext.Provider>
      );
    }


export default ClickcontextProvider

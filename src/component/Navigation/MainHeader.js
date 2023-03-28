import React, { useState, useEffect } from "react";

import './MainHeader.css';

const MainHeader = (props) => {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

  const cls = visible ? "visible" : "hidden";

    return ( 
    <header className={`main-header ${cls}`}>    
        {props.children}
    </header>
     );
}
 
export default MainHeader;
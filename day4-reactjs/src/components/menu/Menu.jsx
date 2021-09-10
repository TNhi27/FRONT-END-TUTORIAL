import React from 'react';
import "./Menu.scss"

function Menu(props) {
   const {isOpen,setOpen} = props
    return (
        <div className={isOpen?"menu active":"menu"}>
            <ul>
                <li className="item" ><a onClick={()=>setOpen(false)} href="#works">Works</a></li>
                <li className="item"><a onClick={()=>setOpen(false)} href="#intro">Intro</a></li>
                <li className="item"><a onClick={()=>setOpen(false)} href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Menu;
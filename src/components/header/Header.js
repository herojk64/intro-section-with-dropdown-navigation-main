import Logo from '../../images/logo.svg';
import Features from './Features';
import classes from "./header.module.css";
import drop from "./Drop.module.css";
import Company from "./Company";
import Buttons from '../parts/Buttons';
import { useState } from 'react';

import Menu from '../../images/icon-menu.svg';
import Close from '../../images/icon-close-menu.svg';
import Arrowdown from "../../images/icon-arrow-down.svg";
import Arrowup from "../../images/icon-arrow-up.svg";
function Header(){
    var link = "#";
    let [MenuOption,UpdateEvent] = useState(0);
    let [ArrowImg,ArrowUpdate] = useState(0);
    let [ArrowImgComp,ArrowUpdateComp] = useState(0);
    return (
    <header className={classes.Heading}>
        <div><img src={Logo} alt="Snap" /></div>
        <button className={classes.MenuLogo} onClick={()=>{MenuOption === 0?UpdateEvent(1):UpdateEvent(0)}}>
                <img src={MenuOption === 0?Menu:Close} alt="menu"/>
            </button>
        <div className={classes.HeaderNav} data-menu={MenuOption}>
          
            <nav>
            <ol>
                <li className={drop.Drop} onMouseOver={ ()=>{ ArrowUpdate(1) }} onMouseOut={ ()=>{ArrowUpdate(0)}}><span className={drop.DropHov}><label>Features</label><img src={ArrowImg === 1?Arrowup:Arrowdown} alt=""/></span>
                    <Features />
                </li>
                <li className={drop.Drop} onMouseOver={()=>{ArrowUpdateComp(1)}} onMouseOut={()=>{ArrowUpdateComp(0)}}><span className={drop.DropHov}><label>Company</label><img src={ArrowImgComp === 1?Arrowup:Arrowdown} alt=""/></span>
                    <Company />
                </li>
                <li><a href={link}>Careers</a></li>
                <li><a href={link}>About</a></li>
            </ol>
            </nav>
            <div className={classes.Login}>
                <Buttons Btn={1} Content="Login"/>
                <Buttons Btn={2} Content="Register"/>
            </div>
        </div>
        
    </header>
    );
}
export default Header;
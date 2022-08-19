import Button from '../parts/Buttons';
import classes from './Main.module.css';
import desktopLogo from '../../images/image-hero-desktop.png';
import mobaLogo from '../../images/image-hero-mobile.png';
import Logo from "./Logo"
function Main(){
    return (
        <main className={classes.MainBodyHolder}>
            <div className={classes.MobaLogo}><img src={mobaLogo} alt="logo"/></div>
            <div className={classes.ContentHolder}>
            <div>
                <h1>Make <b>Remote Work</b></h1>
                <p>Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
  <Button Btn={3} Content="Learn more"/>
  </div>
  <Logo />
            </div>
            <div className={classes.DesktopLogo}>
                <img src={desktopLogo} alt="logo"/>
            </div>
        </main>
    );
}

export default Main;
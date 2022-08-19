import React from 'react'
import classes from "./Logo.module.css"
import Databiz from "../../images/client-databiz.svg"
import Audiophile from "../../images/client-audiophile.svg"
import Maker from "../../images/client-maker.svg"
import Meet from "../../images/client-meet.svg"
import Images from "../parts/Image"

const Logo = () => {
  return (
     <div className={classes.LogoContainer}>
        <Images ImgName={Databiz} Name="Databiz"/>
        <Images ImgName={Audiophile} Name="Autophile" />
        <Images ImgName={Maker}Name="Maker" />
        <Images ImgName={Meet} Name="Meet" />
  </div>
  )
}

export default Logo;
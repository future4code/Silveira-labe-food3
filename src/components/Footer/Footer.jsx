import React from "react"
import avatarV from "../../assets/avatarV.png"
import homeV from "../../assets/homeV.png"
import cartV from "../../assets/cartV.png"
import avatar from "../../assets/avatar.png"
import home from "../../assets/home.png"
import cart from "../../assets/cart.png"
import { Cart, FooterContainer, Home } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToCart, goToFeed, goToProfile } from "../../routes/coordinator"

const Footer = (props) => {
    const navigate = useNavigate()
    return (
        <FooterContainer >
            <Home src={props.page === "home" ? homeV : home} onClick={() =>  goToFeed(navigate)}/>
             <Cart src={props.page === "cart" ? cartV : cart} onClick={() =>  goToCart(navigate)}/>
             <img src={props.page === "avatar" ? avatarV : avatar} onClick={() =>  goToProfile(navigate)}/>
        </FooterContainer>
    )
}

export default Footer
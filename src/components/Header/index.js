import React from 'react'
import Logo from '../../static/logo_for_company.png'
import {HeaderWrapper, LogoWrapper, LinksWrapper, LogoImage, CustomLink } from './elements';

class Header extends React.Component {
    render () {
        return (
            <HeaderWrapper>
                <LogoWrapper>
                    <LogoImage src={Logo} alt="Logo"/>
                </LogoWrapper>
                <LinksWrapper>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/login">Login</CustomLink>
                    <CustomLink to="/register">Sinup</CustomLink>
                </LinksWrapper>
            </HeaderWrapper>
        )
    }
}

export default Header;
import React, { useEffect, useState } from 'react'
import {StyledHeader, MenuLogoContainer, LogoBackground, MenuStyled, NavBarItemMain, NavBarItem} from './Navbar.styled'
import OpenPage from '../areas/OpenPage'
import _ from 'lodash'

const NAV_OPTIONS: {title: string, onClick: () => void}[] = [
    {title: 'Home', onClick: () => OpenPage('/')},
    {title: 'Login', onClick: () => OpenPage('/login')},
    {title: 'Sign Up', onClick: () => OpenPage('/register')},
]

interface NavbarProps {
    selected: number
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const {selected} = props
    const [isAtTop, setIsAtTop] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY == 0) {
            setIsAtTop(true);
        }
        if (currentScrollY > 0) {
            setIsAtTop(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isAtTop]);

    return (
        <StyledHeader style={{backgroundColor: isAtTop ? '#FFCB05' : 'rgba(255,255,255,0.85)'}}>
            <MenuLogoContainer>
                <LogoBackground style={{visibility: isAtTop ? 'hidden' : 'visible',
                                        opacity: isAtTop ? 0 : 1}}
                                         href={'/'}>
                    <img height={42} src={require('../../assets/images/logo.png')} alt={"MasterSeats Logo"}/>
                </LogoBackground>
                <MenuStyled>
                    {_.map(NAV_OPTIONS, ({title, onClick}, index) => {
                        if (index === selected) {
                            return (
                                    <NavBarItemMain onClick={onClick}>
                                        {title}
                                    </NavBarItemMain>
                            )
                        } else {
                            return (
                                    <NavBarItem onClick={onClick}>
                                        {title}
                                    </NavBarItem>
                            )
                        }
                    })}
                </MenuStyled>
            </MenuLogoContainer>
        </StyledHeader>
    )
}

export default Navbar
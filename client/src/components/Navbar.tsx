import React, { useEffect, useState } from 'react'
import {StyledHeader, MenuLogoContainer, LogoBackground, MenuStyled, NavBarItemMain, NavBarItem} from './Navbar.styled'

const Navbar: React.FC = () => {
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
                    <NavBarItemMain>
                        Home
                    </NavBarItemMain>
                    <div style={{width: 20}}/>
                    <NavBarItem>
                        Login
                    </NavBarItem>
                    <div style={{width: 5}}/>
                    <NavBarItem>
                        Sign Up
                    </NavBarItem>
                </MenuStyled>
            </MenuLogoContainer>
        </StyledHeader>
    )
}

export default Navbar
import React, { useEffect, useState, useContext } from 'react'
import {StyledHeader, MenuLogoContainer, LogoBackground, MenuStyled, NavBarItemMain, NavBarItem} from './Navbar.styled'
import OpenPage from './OpenPage'
import {ScreenSize} from '../../lib'
import {Grid} from 'antd'
import _ from 'lodash'
import {UserContext} from '../../lib/UserContext'

const {useBreakpoint} = Grid

const NAV_OPTIONS: {title: string, onClick: () => void}[] = [
    {title: 'Home', onClick: () => OpenPage('/')},
    {title: 'Login', onClick: () => OpenPage('/login')},
    {title: 'Sign Up', onClick: () => OpenPage('/register')},
]

const NOT_LOGGED_IN_OPTIONS: {title: string, onClick: () => void}[] = [
    {title: 'Log In', onClick: () => OpenPage('/login')}
] 

interface NavbarProps {
    selected: number
    isDashboard?: boolean
    isLoggedIn: boolean
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const {currentUser} = useContext(UserContext)
    const {selected, isDashboard, isLoggedIn} = props
    const [isAtTop, setIsAtTop] = useState(true);
    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    
    const DASHBOARD_NAV_OPTIONS: {title: string, onClick: () => void}[] = [
        {title: 'Home', onClick: () => OpenPage('/dashboard')},
        {title: currentUser !== null ? `Welcome, ${currentUser.first_name}` : 'Profile', onClick: () => OpenPage('/profile')}
    ] 

    useEffect(() => {
        Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => {
            if (screen[0] !== ScreenSize[screenSize]) {
                setScreenSize(ScreenSize[screen[0]])
            }
        })
    }, [screens])
  
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

    var options = []
    if (!isDashboard || isDashboard === undefined) {
        options = NAV_OPTIONS
    } else {
        if (isLoggedIn) {
            options = DASHBOARD_NAV_OPTIONS
        } else {
            options = NOT_LOGGED_IN_OPTIONS
        }
    }

    return (
        <StyledHeader style={{backgroundColor: isAtTop ? '#FFCB05' : 'rgba(255,255,255,0.85)'}}>
            <MenuLogoContainer>
                {(!isDashboard || isDashboard === undefined) && screenSize !== 0 ? 
                    <LogoBackground style={{visibility: isAtTop ? 'hidden' : 'visible', opacity: isAtTop ? 0 : 1}} href={'/'}>
                        <img height={42} src={require('../../../assets/images/logo/logo.png')} alt={"MasterSeats Logo"}/>
                    </LogoBackground>
                : null}
                
                <MenuStyled>
                    {_.map(options, ({title, onClick}, index) => {
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
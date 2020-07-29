import React, { useEffect, useState, useContext } from 'react'
import {
    StyledHeader, 
    MenuLogoContainer, 
    LogoBackground, 
    MenuStyled, 
    NavBarItemMain, 
    NavBarItem,
    NavButtonStyled,
    NavDropdownContainer,
    NavButtonStyledTitle
} from './Navbar.styled'
import OpenPage from './OpenPage'
import {ScreenSize} from '../../lib'
import {Grid, Dropdown, Menu} from 'antd'
import _ from 'lodash'
import {UserContext} from '../../lib/UserContext'
import {ButtonLink} from '../Universal/Card.styled'

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
    const {currentUser, setToken} = useContext(UserContext)
    const {selected, isDashboard, isLoggedIn} = props
    const [isAtTop, setIsAtTop] = useState(true);
    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    
    const DASHBOARD_NAV_OPTIONS: {title: string, onClick?: () => void, isDropdown?: boolean}[] = [
        {title: 'Home', onClick: () => OpenPage('/dashboard')},
        {isDropdown: true, title: currentUser !== null ? `Welcome, ${currentUser.first_name}` : 'Welcome'}
    ] 

    const menu = (
        <Menu>
            <Menu.Item>
                <NavButtonStyled onClick={() => OpenPage('/profile')}>
                    Profile
                </NavButtonStyled>
                <NavButtonStyled onClick={() => OpenPage('/ticketwallet')}>
                    Ticket Wallet
                </NavButtonStyled>
                <NavButtonStyled onClick={() => OpenPage('/buying')}>
                    Buy A Ticket
                </NavButtonStyled>
                <NavButtonStyled onClick={async () => {
                    localStorage.setItem('email', '')
                    localStorage.setItem('password', '')
                    await setToken(null)
                    OpenPage('/')
                }}>
                    Log Out
                </NavButtonStyled>
            </Menu.Item>
        </Menu>
    );

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
                    {_.map(options, ({title, onClick, isDropdown}, index) => {
                        if (isDropdown !== undefined) {
                            return (
                            <Dropdown overlay={menu} trigger={['click']}>
                                <NavDropdownContainer>
                                    <NavButtonStyledTitle>
                                        {title}
                                    </NavButtonStyledTitle>
                                    <img height="22" width="22" src={require('../../../assets/images/profile_big.png')}/>
                                </NavDropdownContainer>
                            </Dropdown>
                            )
                        }

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
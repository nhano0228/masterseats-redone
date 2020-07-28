import { Menu, Layout } from 'antd';
import styled from 'styled-components'

import media from "styled-media-query";

const { Header } = Layout;

export const StyledHeader = styled(Header)`
    display: flex;
    padding: 12px;
    padding-left: 30px;
    padding-right: 30px;
    height: 90px;
    width: 100%;
    position: sticky;
    z-index: 5;
    top: 0;
    transition: 0.3s;
`;

export const MenuLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

export const MenuStyled = styled(Menu)`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    ${media.lessThan("small")`
        justify-content: center !important;
    `}
`

export const NavBarItemMain = styled(Menu.Item)`
    font-family: 'Mark Pro Bold';
    background-color: #00274c !important;
    color: #FFCB05;
    border-radius: 15px;
    transition: 0.3s;
    margin-right: 8px;
    &:hover {
        color: #FFCB05;
        opacity: 0.7;
    }
`

export const NavButtonStyled = styled.div`
    font-family: 'Mark Pro Medium';
    border-radius: 15px;
    transition: 0.3s;
    margin-top: 12px;
    margin-bottom: 12px;
    &:hover {
        opacity: 0.7;
    }
`

export const NavButtonStyledTitle = styled.div`
    font-family: 'Mark Pro Medium';
    border-radius: 15px;
    height: 40px;
    line-height: 40px;
    margin-right: 8px;
`

export const NavDropdownContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 8px;
    margin-bottom: 8px;
    margin-top: 4px;
    margin-right: 10px;
    &:hover {
        opacity: 0.7;
    }
`

export const NavBarItem = styled(NavBarItemMain)`
    background-color: rgba(0,0,0,0) !important;
    color: #00274c !important;
    font-family: 'Mark Pro Medium';
    margin-right: 0px;
`

export const LogoBackground = styled.a`
    border-radius: 15px;
    padding-left: 15px;
    padding-right: 15px;
    transition: 0.3s;
`
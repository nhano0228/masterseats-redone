import styled from 'styled-components'
import {Layout} from 'antd'

export const FULL_SCREEN_WITH_BAR = {minHeight:"100vh", marginTop: -90, paddingTop: 90}
export const FULL_SCREEN = {minHeight:"100vh"}

export const LayoutNoBG = styled(Layout)`
    background: rgba(0,0,0,0);
`
import React, {useState} from 'react'
import {Table, Modal} from 'antd'
import {CloseOutlined,PlusCircleOutlined} from '@ant-design/icons'
import {Container, FilterContainer, SelectContainer, returnEmojiString, GenIconButton, GenButton} from '../DashboardPage.styled'
import {MichiganFootballGame, FilterOptions, Ticket} from '../../../../model'
import AddTicketModal from '../AddTicketModal'

const COLUMNS = [
    {
        title: 'Game',
        key: 'game',
        dataIndex: 'game',
        render: (text, data) => returnEmojiString(data.game)
    },
    {
        title: 'Section',
        key: 'section',
        dataIndex: 'section'
    },
    {
        title: 'Price ($)',
        key: 'price',
        dataIndex: 'price'
    },
    {
        title: '',
        key: 'remove',
        dataIndex: 'ticketId',
        render: (text, data) => (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <GenIconButton icon={<CloseOutlined />} onClick={() => {}}>
                    Remove
                </GenIconButton>
            </div>
          )
    }
];
  
const DATA: Ticket[] = [
    {
        game: MichiganFootballGame.Ball,
        price: 25,
        id: '12345',
        section: 24
    },
    {
        game: MichiganFootballGame.Arkansas,
        price: 25,
        id: '1234567',
        section: 25
    },
    
];

const Sell: React.FC = () => {
    const [visible, setVisibility] = useState(false)

    return (
        <Container>
            <AddTicketModal visible={visible} 
                            onCancel={() => setVisibility(false)}/>
            <FilterContainer style={{justifyContent: 'flex-end'}}>
                <GenButton onClick={() => setVisibility(true)} icon={<PlusCircleOutlined />}>
                    Add Ticket
                </GenButton>
            </FilterContainer>
            <Table columns={COLUMNS} dataSource={DATA} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Sell
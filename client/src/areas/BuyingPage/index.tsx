import React, {useState, useContext, useEffect} from 'react'
import {PageDashboard} from '../Universal/PageUniversal'
import BuySection from './Buy'
import {UserContext} from '../../lib/UserContext'
import {Ticket} from '../../../api'

const BuyingPage: React.FC = () => {
    const {api, currentUser} = useContext(UserContext)
    const [tickets, setTickets] = useState<Ticket[]>([])

    const getTickets = async (sortTicketBody) => {
        var sortFields = sortTicketBody
        if (sortTicketBody.game === "All Games") {
            sortFields = {filter: sortTicketBody.filter}
        }

        var body
        if (currentUser === null) {
            body = await api.sortTickets(sortFields)
        } else {
            body = await api.sortTicketsSecure(sortFields)
        }
        setTickets(body.data)
    }

    useEffect(() => {
        getTickets({game: "All Games", filter: "Price - lowest to highest"})
    }, [])

    return (
        <PageDashboard isLoggedIn={currentUser === null ? false : true} selected={-1} hasTable={true}>
            <BuySection tickets={tickets} getTickets={getTickets}/>
        </PageDashboard>
    )
}

export default BuyingPage
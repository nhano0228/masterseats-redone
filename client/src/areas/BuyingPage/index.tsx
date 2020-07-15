import React, {useState, useContext, useEffect} from 'react'
import {PageDashboard} from '../PageUniversal'
import BuySection from '../Sections/Buy'
import {UserContext} from '../../lib/UserContext'
import {Ticket} from '../../../api'

const BuyingPage: React.FC = () => {
    const {api} = useContext(UserContext)
    const [tickets, setTickets] = useState<Ticket[]>([])

    const getTickets = async (sortTicketBody) => {
        var sortFields = sortTicketBody
        if (sortTicketBody.game === "All Games") {
            sortFields = {filter: sortTicketBody.filter}
        }

        const body = await api.sortTickets(sortFields)
        console.log(body.data)
        setTickets(body.data)
    }

    useEffect(() => {
        getTickets({game: "All Games", filter: "Price - lowest to highest"})
    }, [])

    return (
        <PageDashboard isLoggedIn={false}>
            <BuySection tickets={tickets} getTickets={getTickets}/>
        </PageDashboard>
    )
}

export default BuyingPage
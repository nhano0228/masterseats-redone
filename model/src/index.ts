export enum MichiganFootballGame {
    Ball = 'Michigan vs. Ball State',
    Arkansas = "Michigan vs. Arkansas State",
    Wisconsin = "Michigan vs. Wisconsin",
    PennState = "Michigan vs. Penn State",
    Maryland = "Michigan vs. Maryland",
    Indiana = "Michigan vs. Indiana"
}

export enum FilterOptions {
    LowestHighest = "Price - lowest to highest", 
    HighestLowest = "Price - highest to lowest", 
    LowestSection = "Lowest Section",
    HighestSection = "Highest Section"   
}

export enum TicketStatus {
    Open = 0,
    Removed = 1,
    PendingTransfer = 2,
    CompletedTransfer = 3
}

export interface User {
    user_id: string
    email: string
    password: string
    first_name: string
    last_name: string
}

export interface Ticket {
    id: string
    game: MichiganFootballGame
    section: number
    price: number
    user_id: string
    status: TicketStatus
    confirmed_seller_transfer: boolean
    confirmed_buyer_transfer: boolean
}

export const GAMES: MichiganFootballGame[] = [MichiganFootballGame.Ball, 
    MichiganFootballGame.Arkansas, 
    MichiganFootballGame.Wisconsin, 
    MichiganFootballGame.PennState, 
    MichiganFootballGame.Maryland, 
    MichiganFootballGame.Indiana 
]

export const FILTER_OPTIONS: FilterOptions[] = [FilterOptions.LowestHighest, 
    FilterOptions.HighestLowest,
    FilterOptions.LowestSection,
    FilterOptions.HighestSection
]

export enum ScreenSize {
    "xs" = 0,
    "sm" = 1,
    "md" = 2,
    "lg" = 3,
    "xl" = 4,
    "xxl" = 5
}

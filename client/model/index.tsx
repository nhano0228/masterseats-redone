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

export interface Ticket {
    id: string
    game: MichiganFootballGame
    section: number
    price: number
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

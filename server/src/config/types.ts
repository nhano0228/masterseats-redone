export enum MichiganFootballGame {
    Ball = "Michigan vs. Ball State",
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
    Open = "Open",
    Removed = "Removed",
    PendingTransfer = "Pending Transfer",
    CompletedTransfer = "Completed Transfer"
}

export enum EmailTemplates {
    SignUpConfirmation = "signup_confirmation",
    PasswordReset = "password_reset"
}

export interface PostTicketBody {
    game: MichiganFootballGame,
    price: number,
    section: number
}

export interface SortTicketsBody {
    game?: MichiganFootballGame, 
    filter?: FilterOptions
}

export interface LoginBody {
    email: string
    password: string
}

export interface SignUpBody extends LoginBody {
    first_name: string
    last_name: string
}

export interface ChangePassword {
    token: string
    new_password: string
}

export interface RemoveTicketBody {
    id: string
}

export interface VerifyEmailBody {
    id: string
}

export interface ForgotPasswordBody {
    email: string
}

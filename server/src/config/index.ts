import {Request } from 'express'
import jwt from 'jsonwebtoken'
import Stripe from 'stripe'

export const stripe = new Stripe('sk_test_51H8nrPLchQMoIhQGH16PhZyAnDFo7JI3LGUTzYVz57IkPpnKXLIcL5rPQopDMH7v3JaDlsJuczHfmJQHknNFcqfS00IJi0L9z5', {
    apiVersion: '2020-03-02'
})

export const jwtSecret = "BIG DICKSSS"

export const getFromJWT = async (request: Request, sections: [string], self): Promise<{[key: string]: string}> => {
    const token = request.headers.authorization.replace('Bearer ', '') as string
    var section_res: {[key: string]: string} = {}
    try {
        const decoded = await jwt.verify(token, jwtSecret)
        for (var section_int in sections) {
            const identifier = sections[section_int]
            section_res[identifier] = decoded[identifier]
        }
    } catch (err) {
        self.setStatus(401)
        throw new Error('Problem with Token: ' + err)
    }

    return section_res
}

export const verifyToken = async (token, self) => {
    try {
        const decoded = await jwt.verify(token, jwtSecret)
        return decoded["email"]
    } catch (err) {
        self.setStatus(401)
        throw new Error('Problem with Token: ' + err)
    }
}
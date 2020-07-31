import {Request } from 'express'
import jwt from 'jsonwebtoken'
import braintree from 'braintree'
import Hyperwallet from 'hyperwallet-sdk'

export const client_hyperwallet = new Hyperwallet({
    username: "restapiuser@49022191610",
    password: "Dogshitamiright1!",
    programToken: "prg-f1ab84b4-84d5-4178-a299-af4a65be81e4",
});

export const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "yxqkzqjdj2t8kgy3",
    publicKey: "sg72qtrbqnj3374k",
    privateKey: "4dcec03ec3aa011acc61196dc75319f3"
  });

export const jwtSecret = "BIG DICKSSS"

export const STARTING_LINK = "https://masterseats-client.vercel.app/"

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
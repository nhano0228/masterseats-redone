import {Request } from 'express'
import jwt from 'jsonwebtoken'

export const jwtSecret = "BIG DICKSSS"

export const getFromJWT = async (request: Request, sections: [string], self): Promise<{[key: string]: string}> => {
    const token = request.headers.authorization.replace('Bearer ', '')
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
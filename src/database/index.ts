import { createConnection } from "mongoose"
import { env } from "../env"

export const connect = () => {
    try {
        const connection = createConnection(env.DATABASE_URI)

        return connection
    } catch (error) {
        throw new Error(`Failed while connecting to MongoDB`)
    }
}
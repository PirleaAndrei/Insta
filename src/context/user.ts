import {User} from "firebase"
import { createContext } from "react"

const UserContext=createContext<User | null>(null)
export default UserContext
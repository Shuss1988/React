import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../Context/UserContext"
const ProtectedRoute = ({children}) => {
    const {user} = useContext(UserContext)
    if( !user) {
        return <Navigate to="/Login" />
    }
return children
}
export default ProtectedRoute;
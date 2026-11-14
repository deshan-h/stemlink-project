import { homeByRole } from "@/data/access";
import { useUser } from "@clerk/react"
import { Navigate } from "react-router-dom";

function Continue() {
    const { user } = useUser();
    const home = homeByRole[user?.publicMetadata?.role];

    return (
        <Navigate to={home} />
    )
}

export default Continue
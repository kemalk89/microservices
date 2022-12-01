import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "./user-state";

export function UserLogout() {
    const navigate = useNavigate();
    const logout = useUserStore(state => state.logout);
    useEffect(() => {
        setTimeout(() => {
            logout();
            navigate("/");
        }, 1000);
    })

    return (
        <div>Mock User Logout...</div>
    );
}
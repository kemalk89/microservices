import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "./user-state";

export function UserLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const setCurrentUser = useUserStore((state) => state.setCurrentUser);

    function handleLogin(e: SyntheticEvent) {
        setCurrentUser({ username });
        navigate("/");

        e.preventDefault();
    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Mock Login</h1>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username you wish to use..." />
            <button type="submit" onClick={handleLogin}>Login</button>
        </form>
    );
}
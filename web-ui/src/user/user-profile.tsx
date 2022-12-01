import { useUserStore } from "./user-state";

export function UserProfile() {
    const currentUser = useUserStore(s => s.currentUser);

    return (
        <div>
            Hallo {currentUser?.username}
            <ul>
                <li>Zahlungsdaten</li>
                <li>Passwort ändern</li>
                <li>Adressen</li>
            </ul>
        </div>
    );
}
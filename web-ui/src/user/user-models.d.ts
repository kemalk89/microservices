export type User = {
    username: string,
};

export interface UserState {
    loading: boolean;
    currentUser: User | null;
    setCurrentUser: (u: User) => void;
    logout: () => void;
}
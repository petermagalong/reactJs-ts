import { createContext } from "react";

export interface User {
    id: number | string;
    name: string;
    age: number;
    isMarried: boolean;
}

export interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextInitialValues: UserContextType = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null
};

export const UserContext = createContext<UserContextType>(contextInitialValues);
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext.tsx";
import type { User } from "./UserContext.tsx";

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        setUsers([{ id:1, name: "pedro", age: 22, isMarried: false }]);
    }, []);

    const addUser = (user: User) => {
        setUsers(prevUsers => prevUsers ? [...prevUsers, user] : [user]);
    };
    const updateUser = (id: string) => {
        if (!users) return;
        setUsers(users.map(user => (user.id === id ? { ...user, name: user.name } : user)));
    };
    const deleteUser = (id: string) => {
        if (!users) return;
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
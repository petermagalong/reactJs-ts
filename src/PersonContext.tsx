import { useContext } from 'react'
import { UserContext } from "./UserContext"
export interface Person {
    name: string;
    age: number;
    isMarried: boolean;
}
export default function PersonContext() {

    const { users } = useContext(UserContext)
  return (
    <>  
        {!users || users.length === 0 ? (
            <p>No users available</p>
        ) : (
            <>
                <p>Name: {users[0].name}</p>
                <p>Age: {users[0].age}</p>
                <p>This person {users[0].isMarried ? "is married" : "is single"}</p>
            </>
        )}
    </>
  )
}
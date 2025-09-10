import './App.css'
import Person from './Person'
import PersonContext from './PersonContext'
import { UserProvider } from './UserContextProvider'
function App() {

  return (
    <>
      <Person name={"peter"} age={22} isMarried={false}/>
      <Person name={"chris"} age={23} isMarried={true}/>
      <UserProvider>
        <h1> CONTEXT </h1>
        <PersonContext />
      </UserProvider>

    </>
  )
}

export default App

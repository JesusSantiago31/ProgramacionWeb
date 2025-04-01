import { useState } from "react"; 
import Header from "./components/Header";
import UserSelector from "./components/UserSelector";
import TaskList from "./components/TaskList";
const App = () => {

  const users = [
    {id: 1, username: "lucio"},
    {id: 2, username: "Pancho"},
    {id: 3, username: "Jesus"},
    {id: 4, username: "Santiago"},
    {id: 5, username: "Cruz"}
  ]

  const allTask={
    1:["Hacer Ejercicio", "Desplegar app en react", "Tumbar produccion"],
    2:["Desplegar App en Angular", "Aprender PHP", "Hacer la tarea de Zamora"],
    3:["Hacer Ejercicio", "Estudiar", "Trabajar"],
    4:["Esudiar", "Dormir", "Hacer la tarea de Zamora"],
    5:["Dormir", "Caminar", "Leer"]
  }

  // Genarando QUERYs
  const [currentUserID, setCurrentUserID] = useState(1);

  const currentUser = users.find((usr) => usr.id == currentUserID);
  const tasks = allTask[currentUserID];

  return(
    <div className="bg-cyan-50 w-screen h-screen p-4">
      <Header user={currentUser}/>
      <section className="bg-white shadow rounded mt-4 p-2">
        
      <UserSelector users={users} newUser = {setCurrentUserID}/>
      <TaskList tasks = {tasks}/>
      </section>
      </div>

  )
}

export default App;
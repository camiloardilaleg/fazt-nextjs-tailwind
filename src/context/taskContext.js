import { createContext } from "react";

/* create context nos permite poder exportar un objeto `algo especial` para manejar estado */
export const TaskContext = createContext();


export const TasksProvider = ({ children }) => {
    let hello = "Camilo Ardila";
    
    return(
        <TaskContext.Provider value={{hello}}>
            {children}
        </TaskContext.Provider>
    )
}

/* la idea es que cualquier componente que pasen como hijos {children}, a ese componente <TasksProvider>
podra acceder a taskContext */
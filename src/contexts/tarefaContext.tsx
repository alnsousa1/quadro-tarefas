import axios from "axios";
import { Children, ReactNode, createContext, useEffect, useState } from "react";

interface Tarefas {
    titulo: string;
    descricao: string;
}
interface PropsTarefaContext {
    tarefas: Array<Tarefas>
    createTarefa: (tarefas: Tarefas) => Promise<void>
}
export const TarefaContext = createContext(
    {} as PropsTarefaContext
)

    interface PropsTarefaProvider{
        children: ReactNode
    }

export function TarefasProvider({ children }: PropsTarefaProvider){
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data.tarefas)
        })
    }, [])

    async function createTarefa(data: Tarefas){

        const resposta = await axios.post('/api/tarefas', data)

        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data.tarefas)
        })
    }

    return(
        <TarefaContext.Provider value={{tarefas, createTarefa}}>
            {children}
        </TarefaContext.Provider>
    )
}

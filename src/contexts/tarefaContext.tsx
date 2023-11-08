import axios from "axios";
import { Children, ReactNode, createContext, useEffect, useState } from "react";

interface Tarefas {
    id: string;
    titulo: string;
    descricao: string;
    quadro: string;
}
interface PropsTarefaContext {
    tarefas: Array<Tarefas>
    createTarefa: (tarefas: Tarefas) => Promise<void>
    deleteTarefa: (id: string) => Promise<void>
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

    async function deleteTarefa(id: string) {
        await axios.delete(`/api/tarefas/${id}`)

        axios.get('/api/tarefas').then((res) => {setTarefas(res.data.tarefas)})
    }

    return(
        <TarefaContext.Provider value={{tarefas, createTarefa, deleteTarefa}}>
            {children}
        </TarefaContext.Provider>
    )
}

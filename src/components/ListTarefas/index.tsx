import {useContext} from 'react'
import { Container } from "./styles";
import { TarefaContext } from '../../contexts/tarefaContext';

export function ListTarefas() {

    const { tarefas, deleteTarefa } = useContext(TarefaContext)

    const handleDeleteTarefa = (id: string) => {
        deleteTarefa(id)
    }

    return (
        <>
                       <Container>
                <div className="quadro">
                    <h3>Quadro 1</h3>
                    <ul>
                        {tarefas
                            .filter((tarefa) => tarefa.quadro === "Quadro1")
                            .map((tarefa, index) => (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <button
                                        className="button-red"
                                        onClick={() =>
                                            handleDeleteTarefa(tarefa.id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="quadro">
                    <h3>Quadro 2</h3>
                    <ul>
                        {tarefas
                            .filter((tarefa) => tarefa.quadro === "Quadro2")
                            .map((tarefa, index) => (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <button
                                        className="button-red"
                                        onClick={() =>
                                            handleDeleteTarefa(tarefa.id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="quadro">
                    <h3>Quadro 3</h3>
                    <ul>
                        {tarefas
                            .filter((tarefa) => tarefa.quadro === "Quadro3")
                            .map((tarefa, index) => (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <button
                                        className="button-red"
                                        onClick={() =>
                                            handleDeleteTarefa(tarefa.id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </Container>
        </>
    )
}
